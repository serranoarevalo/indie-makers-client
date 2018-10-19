import React from "react";
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
  render() {
    const { logoUrl, isUploading, website, name, description } = this.state;
    return (
      <ProductEditorPresenter
        logoUrl={logoUrl}
        isUploading={isUploading}
        website={website}
        name={name}
        description={description}
        handleInputChange={this.handleInputChange}
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
  public handleSubmit = () => {};
}
