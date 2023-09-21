import styled from "styled-components";
import { Container } from "../../styles/globals";
import { Button } from "../Hero/index.styles";

export const ComicsByCategoriesContainer = styled(Container)`
  margin-top: 4rem;
  display: flex;
  gap: 18px;

  p {
    font-size: 24px;
    background-color: ${(props) => props.theme.blue300};
    padding: 1rem 1.5rem;
    color: #fff;
  }
`;

export const ComicsByCategoriesContentCards = styled.div`
  display: flex;
  flex: 1;
  align-items: start;
  justify-content: start;
  gap: 18px;

  overflow: hidden;
`;

export const ComicsByCategoriesContentCardsButton = styled(Button)`
  padding: 8px 12px !important;
`;

export const ComicBycategoriesCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    background-color: rgb(204, 204, 204);
    width: 100px;
    height: 100px;
  }

  span {
    font-size: 14px;
  }

  strong {
    font-size: 14px;
  }
`;
