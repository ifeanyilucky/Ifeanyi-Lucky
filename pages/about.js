import React, { Component } from "react";
import Layout from "../Components/Layout/index";
import styled from "styled-components";
const About = () => {
  return (
    <>
      <Layout title="About me" text="About">
        <PageSection>
          <h1 className="intro para">About me</h1>
          <p className="about__text">
            I'm a software engineer specializing in developing - and often
            designing - high-quality applications and websites. I’m currently
            looking for a mid-level role.
          </p>
        </PageSection>
      </Layout>
    </>
  );
};

const PageSection = styled.div`
  margin-top: 5rem;
  .about__text {
    font-size: 0.83rem;
  }
`;

export default About;
