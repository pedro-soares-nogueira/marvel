import styled from "styled-components";
import { Container } from "../../../styles/globals";
import { Button } from "../Hero/index.styles";
import bgImage from "../../assets/bg_contact_image.jpg";

export const ContactContainer = styled(Container)`
  @media (max-width: ${(props) => props.theme.bp_xlarge}) {
    margin: 0 1rem;
  }

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  margin-top: 4rem;
  padding: 2rem;

  background-image: url(${bgImage});
  background-size: cover; /* Isso ajusta a imagem para cobrir todo o elemento */
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #fe0000; /*  ${(props) => props.theme.red300}; */

  color: ${(props) => props.theme.white};
  border-radius: 40px;
  height: 20rem;
  border: 4px solid ${(props) => props.theme.yellow300};

  span {
    @media (max-width: ${(props) => props.theme.bp_medium}) {
      font-size: 2rem;
    }

    font-size: 3rem;
    display: block;
    text-align: center;
    font-weight: 800;
    text-transform: uppercase;

    strong {
      background-color: ${(props) => props.theme.yellow300};
      color: ${(props) => props.theme.black};
      padding: 0 10px;
    }
  }

  img {
    @media (max-width: ${(props) => props.theme.bp_large}) {
      width: 7rem;
    }

    position: absolute;
    width: 14rem;
    top: 0px;
    left: 0px;
    border-radius: 37px;
  }
`;

export const ContactButton = styled(Button)`
  padding-bottom: 14px !important;
  padding-top: 14px !important;
`;
