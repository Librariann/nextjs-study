import Head from "next/head";
import React from "react";
import Card from "./Card";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Card className="w-3/4 lg:w-1/2">{children}</Card>
      </main>
    </>
  );
};

export default Layout;
