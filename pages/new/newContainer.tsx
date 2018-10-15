import React from "react";
import Axios from "axios";
import uuid from "uuid/v1";
import { withRouter } from "next/router";
import { Mutation, MutationFn } from "react-apollo";
import NewPresenter from "./newPresenter";
import { AWS_URL } from "../../configs";
import { toast } from "react-toastify";
import { addProduct, addProductVariables } from "types/api";
import { ADD_PRODUCT } from "./newQueries";
import { GET_DASHBOARD } from "../../components/dashboard/DashboardQueries";

interface IState {
  name: string;
  description: string;
  needsHelp: boolean;
  website: string;
  logo: string;
  status: string | null;
  canUpload: boolean;
}

class AddProductMutaton extends Mutation<addProduct, addProductVariables> {}

class NewContainer extends React.Component<any, IState> {
  public addProduct: MutationFn<addProduct>;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      needsHelp: false,
      website: "",
      logo: "",
      status: null,
      canUpload: true
    };
  }
  render() {
    const {
      canUpload,
      status,
      name,
      description,
      website,
      logo,
      needsHelp
    } = this.state;
    return (
      <AddProductMutaton
        mutation={ADD_PRODUCT}
        variables={{ name, description, website, logo, needsHelp }}
        onCompleted={this.onAddCompleted}
        refetchQueries={[{ query: GET_DASHBOARD }]}
      >
        {addProduct => {
          this.addProduct = addProduct;
          return (
            <NewPresenter
              {...this.state}
              canUpload={canUpload}
              handleInputChange={this.handleInputChange}
              uploadImage={this.handleImageUpload}
              handleSubmit={this.handleSubmit}
              status={status}
            />
          );
        }}
      </AddProductMutaton>
    );
  }
  public handleInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = event => {
    const {
      target: { name, value }
    } = event;
    if (name === "needsHelp") {
      this.setState(prevState => {
        return {
          needsHelp: !prevState.needsHelp
        };
      });
    } else {
      this.setState({
        [name]: value
      } as any);
    }
  };
  public handleSubmit = () => {
    const { canUpload, name, description } = this.state;

    if (!canUpload) {
      toast.error("Wait until the image has uploaded");
      return;
    } else if (name === "" && description === "") {
      toast.error("Fill up the required fields");
      return;
    }
    this.addProduct();
  };
  public onAddCompleted = (data: addProduct) => {
    const { router } = this.props;
    const { name } = this.state;
    const {
      CreateProduct: { ok, product, error }
    } = data;
    if (!ok && error) {
      toast.error(error);
      return;
    } else {
      toast.success(`${name} created!`);
      if (product) {
        router.push(`/product/${product.slug}`);
      }
    }
  };
  public handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { files }
    } = event;
    if (files) {
      const file = files[0];
      if (file.size > 524288) {
        toast.error("File is too big");
      } else {
        this.setState({
          status: "Uploading Photo",
          canUpload: false
        });
        this.signUrl(file);
      }
    }
  };
  private signUrl = async (file: File) => {
    const {
      data: { fileUrl, signedUrl }
    }: any = await Axios.get(
      `${AWS_URL}?name=${encodeURIComponent(uuid())}&type=${file.type}`
    );
    this.uploadImage(file, signedUrl, fileUrl);
  };
  private uploadImage = async (
    file: File,
    signedUrl: string,
    fileUrl: string
  ) => {
    const headers = {
      "Content-Type": file.type
    };
    try {
      await Axios.put(signedUrl, file, {
        headers
      });
      this.setState({
        logo: fileUrl,
        status: null,
        canUpload: true
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default withRouter(NewContainer);
