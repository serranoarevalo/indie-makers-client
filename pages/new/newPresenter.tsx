import React from "react";
import Head from "next/head";
import ProductEditor from "../../components/productEditor";

interface IProps {
  handleSubmit: (
    name: string,
    description: string,
    logoUrl?: string,
    website?: string,
    needsHelp?: boolean,
    isLaunched?: boolean
  ) => void;
}

const NewPresenter: React.SFC<IProps> = ({ handleSubmit }) => (
  <>
    <Head>
      <title>Add Product | Indie Makers</title>
      <meta name="description" content={"Submit a product to Indie Makers"} />
    </Head>
    <ProductEditor
      onSaveFn={handleSubmit}
      title={"Add new product"}
      buttonText={"Add Product"}
    />
  </>
);

export default NewPresenter;
