import styled from "styled-components";
import { Container } from "../../styles/globals";

export const ContactContainer = styled(Container)`
  @media (max-width: ${(props) => props.theme.bp_xlarge}) {
    margin: 0 1rem;
  }

  margin-top: 4rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.red300};
  color: ${(props) => props.theme.white};
  border-radius: 40px;
  height: 20rem;
  border: 4px solid ${(props) => props.theme.yellow300};
`;
