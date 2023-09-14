import { styled } from "styled-components";
import { Container } from "../../styles/globals";
import { Button } from "../../components/Hero/index.styles";

export const SaleComicsContainer = styled(Container)`
    margin-top: 4rem;
`;

export const SaleComics = styled.div``;

export const SaleComicsHeader = styled.div`
    display: flex;
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
    margin: 2rem 0rem;

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

export const ComicCard = styled.div`
    width: 100%;
    max-width: 19rem;
    flex: none;
    border: 1px solid #000;

    position: relative;
`;

export const ComicCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    font-weight: 800;
    margin: 14px;
`;

export const ComicImage = styled.img`
    width: 100%;
    background-color: #ccc;
    display: block;
    height: 24rem;
    margin: 1rem 0rem 0rem;
    object-fit: cover;
`;

export const ComicName = styled.span`
    display: block;
    text-align: center;
    font-size: 20px;
    background-color: #000;
    color: #fff;
    padding: 16px 12px 26px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ComicCardButton = styled(Button)`
    position: absolute;
    bottom: -5%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #000;
    text-transform: uppercase;
    border: 1px solid #000;
    border-radius: 0 !important;
`;

export const CategoriesSaleComics = styled.div`
    border: 1px solid #000;
`;
