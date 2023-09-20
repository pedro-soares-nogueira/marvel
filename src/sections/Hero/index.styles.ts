import { styled } from "styled-components";
import { Container } from "../../styles/globals";

export const HeroWrapper = styled.div`
  background-color: ${(props) => props.theme.red300};
  border-bottom: 12px solid ${(props) => props.theme.yellow300};
`;

export const ContainerHeroWrapper = styled(Container)`
  @media (max-width: ${(props) => props.theme.bp_large}) {
    flex-direction: column;
    text-align: center;
    margin: 0 2rem;
    padding: 3rem 2rem;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem;
`;

export const TextHeroContent = styled.div`
  @media (max-width: ${(props) => props.theme.bp_large}) {
    align-items: center;
  }

  padding: 2rem;
  max-width: 35rem;

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
  background: ${(props) => props.theme.black};

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

export const Image = styled.img`
  max-width: 664px;
  width: 100%;
`;
