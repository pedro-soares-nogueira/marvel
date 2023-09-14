import { ArrowLeft, ArrowRight } from "phosphor-react";
import { Hero } from "../../components/Hero";
import { Navbar } from "../../components/Navbar";
import {
    ComicCard,
    ComicCardButton,
    ComicCardHeader,
    ComicImage,
    ComicName,
    SaleComics,
    SaleComicsContainer,
    SaleComicsHeader,
    SaleComicsHeaderButton,
    SaleComicsProducts,
} from "./index.styles";
import { useRef } from "react";

const comics = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
];

export const Home = () => {
    const carousel = useRef<HTMLDivElement>(null);

    const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    return (
        <section style={{ margin: "0rem 0rem 10rem" }}>
            <Navbar />
            <Hero />
            <SaleComicsContainer>
                <SaleComics>
                    <SaleComicsHeader>
                        <span>
                            Comics for <strong>SALE</strong>
                        </span>
                        <div>
                            <SaleComicsHeaderButton onClick={handleLeftClick}>
                                <ArrowLeft size={22} />
                            </SaleComicsHeaderButton>
                            <SaleComicsHeaderButton onClick={handleRightClick}>
                                <ArrowRight size={22} />
                            </SaleComicsHeaderButton>
                        </div>
                    </SaleComicsHeader>
                    <SaleComicsProducts ref={carousel}>
                        {comics.map((item) => (
                            <ComicCard key={item}>
                                <ComicCardHeader>
                                    <span>99/99/9999</span>
                                    <span>#9999</span>
                                </ComicCardHeader>
                                <ComicImage src="" alt="comics" />
                                <ComicName>comics name</ComicName>
                                <ComicCardButton>More</ComicCardButton>
                            </ComicCard>
                        ))}
                    </SaleComicsProducts>
                </SaleComics>
            </SaleComicsContainer>
        </section>
    );
};
