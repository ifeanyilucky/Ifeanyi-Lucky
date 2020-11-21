import Head from "next/head";
import style from "../styles/Home.module.css";
import React from "react";
import Layout from "../Components/Layout";
import Link from "next/link";
import styled from "styled-components";
const Index = () => {
  const lucky = {
    color: "#27c53f",
  };
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
                  <Intro>
                    <h1
                      data-text="I'm Ifeanyi Lucky"
                      className="h1"
                      className="intro__text"
                    >
                      I'm Ifeanyi<span style={lucky}> Lucky</span>
                    </h1>
                  </Intro>
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
                    , <span className="link">Articles</span>,
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
const Intro = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;

  .intro__text {
    font-size: 4rem;
    color: black;
    font-weight: 900;
    margin: 2rem 0rem 1.5rem;
    position: relative;
    letter-spacing: -1.1px;
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &::before {
      left: 2px;
      text-shadow: -1px 0 #27c53f;
      animation: noise-anim-2 15s infinite linear alternate-reverse;
    }
    &::after {
      left: -2px;
      text-shadow: 3px 0 #ea4335;
      animation: noise-anim 2s infinite linear alternate-reverse;
    }
    @keyframes noise-anim {
      0% {
        clip-path: inset(29% 0 25% 0);
      }
      5% {
        clip-path: inset(9% 0 38% 0);
      }
      10% {
        clip-path: inset(96% 0 1% 0);
      }
      15% {
        clip-path: inset(75% 0 23% 0);
      }
      20% {
        clip-path: inset(46% 0 50% 0);
      }
      25% {
        clip-path: inset(3% 0 46% 0);
      }
      30% {
        clip-path: inset(82% 0 2% 0);
      }
      35% {
        clip-path: inset(88% 0 1% 0);
      }
      40% {
        clip-path: inset(91% 0 8% 0);
      }
      45% {
        clip-path: inset(96% 0 2% 0);
      }
      50% {
        clip-path: inset(59% 0 38% 0);
      }
      55% {
        clip-path: inset(41% 0 53% 0);
      }
      60% {
        clip-path: inset(21% 0 47% 0);
      }
      65% {
        clip-path: inset(89% 0 4% 0);
      }
      70% {
        clip-path: inset(1% 0 95% 0);
      }
      75% {
        clip-path: inset(86% 0 4% 0);
      }
      80% {
        clip-path: inset(95% 0 5% 0);
      }
      85% {
        clip-path: inset(54% 0 36% 0);
      }
      90% {
        clip-path: inset(70% 0 27% 0);
      }
      95% {
        clip-path: inset(6% 0 16% 0);
      }
      100% {
        clip-path: inset(95% 0 2% 0);
      }
    }
    @keyframes noise-anim-2 {
      0% {
        clip-path: inset(76% 0 21% 0);
      }
      5% {
        clip-path: inset(54% 0 7% 0);
      }
      10% {
        clip-path: inset(55% 0 29% 0);
      }
      15% {
        clip-path: inset(89% 0 3% 0);
      }
      20% {
        clip-path: inset(33% 0 40% 0);
      }
      25% {
        clip-path: inset(17% 0 56% 0);
      }
      30% {
        clip-path: inset(37% 0 51% 0);
      }
      35% {
        clip-path: inset(38% 0 19% 0);
      }
      40% {
        clip-path: inset(93% 0 4% 0);
      }
      45% {
        clip-path: inset(44% 0 14% 0);
      }
      50% {
        clip-path: inset(53% 0 26% 0);
      }
      55% {
        clip-path: inset(67% 0 11% 0);
      }
      60% {
        clip-path: inset(85% 0 13% 0);
      }
      65% {
        clip-path: inset(27% 0 37% 0);
      }
      70% {
        clip-path: inset(87% 0 4% 0);
      }
      75% {
        clip-path: inset(10% 0 8% 0);
      }
      80% {
        clip-path: inset(51% 0 27% 0);
      }
      85% {
        clip-path: inset(10% 0 60% 0);
      }
      90% {
        clip-path: inset(83% 0 3% 0);
      }
      95% {
        clip-path: inset(23% 0 55% 0);
      }
      100% {
        clip-path: inset(1% 0 81% 0);
      }
    }
    @media (max-width: 991px) {
      font-size: 3.4rem;
    }
  }
`;
export default Index;
