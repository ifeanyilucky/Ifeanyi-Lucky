import React from "react";
import SocialTab from "../Tabs";
import Link from "next/link";
import styled from "styled-components";
import { IconRight } from "../Icons";
const Footer = () => {
  return (
    <>
      <FooterLink>
        <Link href="/about">
          <p>
            <a className="weblink" style={{ color: "var(--para-text)" }}>
              See more about me
              <IconRight />
            </a>
          </p>
        </Link>
      </FooterLink>
      <SocialTab />
    </>
  );
};
const FooterLink = styled.footer`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;
export default Footer;
