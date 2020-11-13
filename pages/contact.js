import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";

import RefTut from "../Components/RefTut";
import Parent from "../Components/parent";

function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>Contact Me | Ifeanyi Lucky | Codack</title>
        </Head>
        <h1> Contact me</h1>

        <br />
        {/* <Parent /> */}
      </Layout>
    </>
  );
}

export default Contact;
