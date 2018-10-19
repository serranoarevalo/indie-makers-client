import React from "react";
import Head from "next/head";
import { getProduct } from "../../types/api";

interface IProps {
  data: getProduct;
}

const EditProductPresenter: React.SFC<IProps> = ({
  data: {
    GetProduct: { product }
  }
}) =>
  product && (
    <>
      <Head>
        <title>Editing {product.name} | Nomad Coders</title>
      </Head>
    </>
  );
export default EditProductPresenter;
