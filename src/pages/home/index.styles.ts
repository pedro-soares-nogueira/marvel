import { styled } from "styled-components";
import { Container } from "../../styles/globals";

export const HeroWrapper = styled.div`
    background-color: ${(props) => props.theme.black};
`;

export const ContainerHeroWrapper = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const TextHeroContent = styled.div`
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
        line-height: normal;
    }

    h2 {
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

export const CarouselHeroWrapper = styled.div`
    flex: 1;
    min-height: 45rem;
`;
