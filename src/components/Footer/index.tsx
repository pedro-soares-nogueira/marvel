import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { FooterContainer, FooterContent, FooterLinks } from "./index.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <a href="https://www.linkedin.com/in/dev-pedrosoares/">
            <LinkedinLogo size={32} color="#fff" />
          </a>
          <a href="https://github.com/pedro-soares-nogueira">
            <GithubLogo size={32} color="#fff" />
          </a>
        </FooterLinks>
        <span>
          @2023 - All Right Reserved. Designed and Developed by Pedro Soares
        </span>
      </FooterContent>
    </FooterContainer>
  );
};
