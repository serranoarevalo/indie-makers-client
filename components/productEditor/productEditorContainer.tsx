import React from "react";
import Axios from "axios";
import uuid from "uuid/v1";
import { toast } from "react-toastify";
import { AWS_URL } from "../../configs";
import ProductEditorPresenter from "./productEditorPresenter";

interface IProps {
  logoUrl?: string;
  name?: string;
  description?: string;
  website?: string;
  needsHelp?: boolean;
  onSaveFn: (
    name: string,
    description: string,
    logoUrl?: string,
    website?: string,
    needsHelp?: boolean
  ) => void;
  title: string;
  buttonText: string;
}

interface IState {
  logoUrl: string;
  prevLogoUrl: string;
  name: string;
  prevName: string;
  description: string;
  prevDescription: string;
  website: string;
  prevWebsite: string;
  needsHelp: boolean;
  prevNeedsHelp: boolean;
  isUploading: boolean;
}

export default class ProductEditorContainer extends React.Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      logoUrl: props.logoUrl || "",
      prevLogoUrl: props.logoUrl || "",
      name: props.name || "",
      prevName: props.name || "",
      description: props.description || "",
      prevDescription: props.description || "",
      website: props.website || "",
      prevWebsite: props.website || "",
      needsHelp: props.needsHelp || false,
      prevNeedsHelp: false,
      isUploading: false
    };
  }
  render() {
    const {
      logoUrl,
      isUploading,
      website,
      name,
      description,
      needsHelp
    } = this.state;
    const { title, buttonText } = this.props;
    return (
      <ProductEditorPresenter
        logoUrl={logoUrl}
        needsHelp={needsHelp}
        isUploading={isUploading}
        website={website}
        name={name}
        title={title}
        description={description}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleImageUpload={this.handleImageUpload}
        buttonText={buttonText}
        handleCheckbox={this.handleCheckbox}
      />
    );
  }
  public handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public handleCheckbox = () => {
    this.setState(prev => {
      return {
        needsHelp: !prev.needsHelp
      };
    });
  };

  public handleSubmit = () => {
    const {
      logoUrl,
      website,
      name,
      description,
      isUploading,
      needsHelp
    } = this.state;
    const { onSaveFn } = this.props;
    if (name === "" || description === "") {
      toast.error("Name and description are required");
    } else if (isUploading) {
      toast.error("Wait until the photo stuff finished uploading");
    } else {
      onSaveFn(name, description, logoUrl, website, needsHelp);
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
          isUploading: true
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
        logoUrl: fileUrl,
        isUploading: false
      });
    } catch (error) {
      console.log(error);
    }
  };
}
