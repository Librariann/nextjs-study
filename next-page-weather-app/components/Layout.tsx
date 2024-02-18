import Head from "next/head";
import React, { ReactNode } from "react";
import Card from "./Card";



const Layout = ({ children }:{children?: ReactNode}) => {
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
