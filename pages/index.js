import Head from "next/head";
import style from "../styles/Home.module.css";
import React from "react";
import Layout from "../Components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Ifeanyi Lucky</title>
        </Head>
        <div>
          <div className={style.helloParent}>
            <div className={style.hello}>
              HELL<span className="bigO">O</span>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-10 mx-auto">
                <div className={style.intro}>
                  <h1 className="h1" className="intro__text">
                    I am <span style={{ color: " #f6ba2c" }}>Ifeanyi</span>
                    Lucky
                  </h1>
                  <div className={style.role}>Frontend Developer</div>
                  <p className="mx-auto mt-3">
                    I'm a software engineer specializing in developing - and
                    often designing - high-quality applications and websites.
                    I’m currently looking for a mid-level role.
                  </p>
                  <br />
                  <p style={{ lineHeight: "30px" }}>
                    Working with my hands to make magic happen on the internet.
                    View my
                    <Link href="/projects">
                      <span className="link">Projects</span>
                    </Link>
                    , <span className="linkk">Articles</span>,
                    <span className="link">Resumé</span>,
                    <Link href="/contact">
                      <span className="link">Contact</span>
                    </Link>
                    me, or send me an email at
                    <a href="mailto:ifeanyilucky360@gmail.com">
                      <span className="link">ifeanyilucky360@gmail.com</span>
                    </a>
                    .
                  </p>
                </div>
                <div className="mt-5">
                  <Link href="/about">
                    <p>
                      <a className="weblink">
                        See more about me
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        >
                          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                        </svg>
                      </a>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
