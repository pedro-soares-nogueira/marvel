import { Carousel } from "../../components/Carousel";
import { Navbar } from "../../components/Navbar";
import { Container } from "../../styles/globals";
import {
  Button,
  ContainerHeroWrapper,
  HeroWrapper,
  TextHeroContent,
} from "./index.styles";

export const Home = () => {
  return (
    <section>
      <Container>
        <Navbar />
      </Container>
      <HeroWrapper>
        <ContainerHeroWrapper>
          <TextHeroContent>
            <p>Marvel API search!</p>
            <h2>Os melhores comics você encontra aqui!!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button>
              Saiba mais
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </TextHeroContent>
          <Carousel />
        </ContainerHeroWrapper>
      </HeroWrapper>
    </section>
  );
};
