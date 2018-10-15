import React from "react";
import Axios from "axios";
import uuid from "uuid/v1";
import NewPresenter from "./newPresenter";
import { AWS_URL } from "../../configs";
import { toast } from "react-toastify";

interface IState {
  name: string;
  description: string;
  needHelp: boolean;
  homepage: string;
  logo: string;
  status: string | null;
  canUpload: boolean;
}

class NewContainer extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      needHelp: false,
      homepage: "",
      logo: "",
      status: null,
      canUpload: true
    };
  }
  render() {
    const { canUpload, status } = this.state;
    return (
      <NewPresenter
        {...this.state}
        canUpload={canUpload}
        handleInputChange={this.handleInputChange}
        uploadImage={this.handleImageUpload}
        status={status}
      />
    );
  }
  public handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { files }
    } = event;
    if (files) {
      const file = files[0];
      if (file.size > 699050) {
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
      console.log(signedUrl, file, headers);
      const request = await Axios.put(signedUrl, file, {
        headers
      });
      console.log(request);
      this.setState({
        logo: fileUrl,
        status: null,
        canUpload: true
      });
    } catch (error) {
      console.log(error);
    }
  };

  public handleInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };
}

export default NewContainer;
