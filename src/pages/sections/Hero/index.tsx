import {
  HeroWrapper,
  ContainerHeroWrapper,
  TextHeroContent,
  Button,
  Image,
} from "./index.styles";
import { ArrowRight } from "phosphor-react";
import main_marvel_banner from "../../../assets/main_marvel_banner.jpg";

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
            <ArrowRight size={22} />
          </Button>
        </TextHeroContent>
        <Image src={main_marvel_banner} alt="main_marvel_banner" />
      </ContainerHeroWrapper>
    </HeroWrapper>
  );
};
