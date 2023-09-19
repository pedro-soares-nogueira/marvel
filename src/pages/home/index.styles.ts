import { styled } from "styled-components";
import { Container } from "../../styles/globals";
import { Button } from "../../components/Hero/index.styles";

export const SaleComicsContainer = styled(Container)`
  margin-top: 4rem;
`;

export const SaleComics = styled.div``;

export const SaleComicsHeader = styled.div`
  @media (max-width: ${(props) => props.theme.bp_small}) {
    span {
      margin: auto;
    }

    div {
      margin: 1rem auto;
    }
  }

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 24px;
    background-color: #162cdd;
    padding: 1rem 1.5rem;
    color: #fff;
  }

  div {
    display: flex;
    gap: 4px;
  }
`;

export const SaleComicsHeaderButton = styled(Button)`
  padding: 8px 12px !important;
`;

export const SaleComicsProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin: 0rem;

  overflow-x: auto;
  scroll-behavior: smooth;
  height: 40rem;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0.3em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
