import {
  HeroWrapper,
  ContainerHeroWrapper,
  TextHeroContent,
  Button,
  Image,
} from "./index.tyles";
import main_marvel_banner from "../../assets/main_marvel_banner.jpg";

export const Hero = () => {
  return (
    <HeroWrapper>
      <ContainerHeroWrapper>
        <TextHeroContent>
          <p>Marvel API search!</p>
          <h2>Os melhores comics você encontra aqui!!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
        <Image src={main_marvel_banner} alt="main_marvel_banner" />
      </ContainerHeroWrapper>
    </HeroWrapper>
  );
};
