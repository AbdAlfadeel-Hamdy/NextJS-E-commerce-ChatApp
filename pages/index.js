import Head from "next/head";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Gonzalo's Store - Find All You Need</title>
        <meta
          name="description"
          content="An online store to sell customers' products"
        />
      </Head>
      <div>All Products</div>
    </Fragment>
  );
};

export default HomePage;
