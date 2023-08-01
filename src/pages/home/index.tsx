import { Navbar } from "../../components/Navbar";
import { Container } from "../../styles/globals";
import {
    Button,
    CarouselHeroImageWhapper,
    CarouselHeroWrapper,
    CarouselImage,
    CarouselWrapper,
    ContainerHeroWrapper,
    HeroWrapper,
    TextHeroContent,
} from "./index.styles";
import { motion } from "framer-motion";

import image01 from "../../assets/carousel/image1.png";
import image02 from "../../assets/carousel/image2.png";
import image03 from "../../assets/carousel/image3.png";
import image04 from "../../assets/carousel/image4.png";
import { RefObject, useEffect, useRef, useState } from "react";

const images = [image01, image02, image03, image04];

export const Home = () => {
    // const carousel: MutableRefObject<HTMLElement | null> = useRef(null);
    const carousel: RefObject<HTMLDivElement> = useRef(null);

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const scrollWidth = carousel.current?.scrollWidth
            ? carousel.current?.scrollWidth
            : 0;
        const offsetWidth = carousel.current?.offsetWidth
            ? carousel.current?.offsetWidth
            : 0;

        setWidth(scrollWidth - offsetWidth);
    }, []);

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
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
                    <CarouselHeroWrapper>
                        {/* CAROUSEL */}
                        <CarouselWrapper
                            ref={carousel}
                            whileTap={{ cursor: "grabbing" }}
                        >
                            <CarouselHeroImageWhapper
                                drag="x"
                                dragConstraints={{ right: 0, left: -width }}
                            >
                                {images.map((image) => (
                                    <motion.div key={image}>
                                        <CarouselImage src={image} alt="" />
                                    </motion.div>
                                ))}
                            </CarouselHeroImageWhapper>
                        </CarouselWrapper>
                    </CarouselHeroWrapper>
                </ContainerHeroWrapper>
            </HeroWrapper>
        </section>
    );
};
