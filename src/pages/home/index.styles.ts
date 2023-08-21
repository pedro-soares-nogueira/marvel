import { styled } from "styled-components";
import { Container } from "../../styles/globals";
import { motion } from "framer-motion";

export const HeroWrapper = styled.div`
    background-color: ${(props) => props.theme.black};
`;

export const ContainerHeroWrapper = styled(Container)`
    @media (max-width: ${(props) => props.theme.bp_large}) {
        flex-direction: column;
        text-align: center;
        margin: 0 2rem;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 3rem 2rem;
`;

export const TextHeroContent = styled.div`
    @media (max-width: ${(props) => props.theme.bp_large}) {
        align-items: center;
    }

    padding: 2rem 0;
    max-width: 45rem;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 16px;

    p {
        color: ${(props) => props.theme.white};
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
    }

    h2 {
        @media (max-width: ${(props) => props.theme.bp_small}) {
            font-size: 42px;
        }
        color: ${(props) => props.theme.white};
        font-size: 52px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }
`;

export const Button = styled.button`
    display: flex;
    padding: 8px 38px;
    align-items: center;
    justify-content: center;
    gap: 10px;

    border-radius: 4px;
    border: none;
    background: ${(props) => props.theme.red300};

    color: ${(props) => props.theme.white};
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    svg {
        width: 28px;
    }

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const CarouselHeroWrapper = styled.div``;

export const CarouselHeroImageWhapper = styled(motion.div)`
    display: flex;
    gap: 4px;
`;

export const CarouselImage = styled.img`
    width: 12rem;
    object-fit: none;
    border-radius: 10px;
    pointer-events: none;
`;

export const CarouselWrapper = styled(motion.div)`
    cursor: grab;
    overflow: hidden;
    max-width: 474px;
    width: 100%;
`;