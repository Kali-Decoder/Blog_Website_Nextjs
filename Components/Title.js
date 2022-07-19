import React from "react";
import Head from "next/head";
const Title = ({ title, description, name }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={name} content={description} />
      </Head>
    </>
  );
};

export default Title;
