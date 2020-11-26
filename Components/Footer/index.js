import React from "react";
import SocialTab from "../Tabs";
import Link from "next/link";
import styled from "styled-components";
import { IconRight } from "../Icons";
const Footer = () => {
  return (
    <>
      <FooterLink>
        <div className="container">
          <Link href="/about">
            <p>
              <a className="weblink">
                See more about me
                <IconRight />
              </a>
            </p>
          </Link>
        </div>
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
