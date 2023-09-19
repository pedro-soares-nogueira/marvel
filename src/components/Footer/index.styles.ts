import styled from "styled-components";
import { Container } from "../../styles/globals";

export const FooterContainer = styled.footer`
  margin-top: 4rem;
  background-color: #000;
  height: 15rem;
  color: ${(props) => props.theme.white};
`;

export const FooterContent = styled(Container)``;
