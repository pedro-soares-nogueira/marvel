import styled from "styled-components";
import { Container } from "../../styles/globals";

export const FooterContainer = styled.footer`
  margin-top: 4rem;
  background-color: #000;
  /* height: 15rem; */
  color: ${(props) => props.theme.white};
`;

export const FooterContent = styled(Container)`
  span {
    text-align: center;
    display: block;
    padding: 1.5rem;
    border-top: 1px #747474 solid;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;

  a {
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.3);
    }
  }
`;
