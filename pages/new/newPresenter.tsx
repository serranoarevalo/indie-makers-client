import React from "react";
import Head from "next/head";
import ProductEditor from "../../components/productEditor";

interface IProps {
  handleSubmit: (
    name: string,
    description: string,
    logoUrl?: string,
    website?: string,
    needsHelp?: boolean
  ) => void;
}

const NewPresenter: React.SFC<IProps> = ({ handleSubmit }) => (
  <>
    <Head>
      <title>Add Product | Indie Maker</title>
    </Head>
    <ProductEditor onSaveFn={handleSubmit} title={"Add new product"} />
  </>
);

export default NewPresenter;
