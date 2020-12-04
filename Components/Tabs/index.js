import styled from "styled-components";
import { Twitter, LinkedIn, Facebook, Github, Instagram } from "../Icons";
const SocialTab = () => {
  return (
    <div>
      <Tab>
        <div className="social">
          <SocialLink href="https://instagram.com/iamcodack" target="_blank">
            <Twitter />
          </SocialLink>
        </div>

        <div className="social">
          <SocialLink href="https://instagram.com/iamcodack" target="_blank">
            <Instagram />
          </SocialLink>
        </div>
        <div className="social">
          <SocialLink href="#linked" target="_blank">
            <LinkedIn />
          </SocialLink>
        </div>
        <div className="social">
          <SocialLink href="#linked" target="_blank">
            <Facebook />
          </SocialLink>
        </div>
        <div className="social">
          <SocialLink href="#linked" target="_blank">
            <Github />
          </SocialLink>
        </div>
      </Tab>
    </div>
  );
};

const Tab = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: fixed;
  top: 30vh;
  left: 0;
  background-color: var(--tab-color);
  padding: 15px 10px;
  vertical-align: middle;
  .social {
    margin-bottom: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    color: grey;
  }
  @media (max-width: 990px) {
    display: flex;
    flex-flow: row nowrap;
    position: fixed;
    top: 92vh;
    right: 0;
    width: 100%;
    height: 57px;
    margin: auto;
    padding-bottom: 1rem;
    vertical-align: bottom;

    .social {
      margin: auto;
    }
  }
`;
const SocialLink = styled.a`
  color: grey;
`;
export default SocialTab;
