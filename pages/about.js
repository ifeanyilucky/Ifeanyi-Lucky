import React from "react";
import Layout from "../Components/Layout/index";
import styled from "styled-components";
import { Desktop, Database, FrontendIcon } from "../Components/Icons";
const About = () => {
  return (
    <>
      <Layout title="About me" text="About">
        <PageSection>
          <h1 className="intro para">About me</h1>
          <p className="about__text">
            Hello! I'm a software engineer that loves the junction of
            engineering and design. I build experiences with exact attention to
            detail that comes through clean code and solid architecture. I'm a
            student of Lagos State University studying Accounting and Software
            Development. I love that technology means I'm always learning
            something new.
          </p>

          <div style={{ marginTop: "5rem" }}>
            <h1 className="profile">Profile</h1>
            <p>Here are some things I'm experienced with:</p>
            <div>
              <li>Javascript</li>
              <li>React</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>Github</li>
              <li>Heroku</li>
              <li>Netlify</li>
            </div>
          </div>
        </PageSection>
      </Layout>
    </>
  );
};

const PageSection = styled.div`
  padding-top: 3rem;
  .intro {
    font-size: var(--font-x-lg);
    font-weight: 800;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  .profile {
    font-size: var(--font-x-md);
    font-weight: 700;
  }

  .about__text {
    font-size: 0.83rem;
  }
`;

export default About;
