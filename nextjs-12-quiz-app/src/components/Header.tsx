import Head from "next/head";
import React from "react";

const Header = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>퀴즈 앱</h1>
      </header>
    </>
  );
};

export default Header;
