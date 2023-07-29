import { Navbar } from "../../components/Navbar";
import { Container } from "../../styles/globals";
import {
    Button,
    CarouselHeroWrapper,
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
                    <CarouselHeroWrapper>
                        {/* CARROUSEL */}
                        <div>teste</div>
                    </CarouselHeroWrapper>
                </ContainerHeroWrapper>
            </HeroWrapper>
        </section>
    );
};
