import React from "react";

interface IProps {
  logoUrl?: string;
  name: string;
  description: string;
  website?: string;
  needsHelp?: boolean;
  isUploading: boolean;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ProductEditorPresenter: React.SFC<IProps> = ({
  logoUrl,
  name,
  description,
  website,
  needsHelp,
  isUploading,
  handleInputChange
}) => null;

export default ProductEditorPresenter;
