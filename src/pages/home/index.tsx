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

const comics = [1, 2, 3, 4];

export const Home = () => {
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
                            <SaleComicsHeaderButton>
                                <ArrowLeft size={22} />
                            </SaleComicsHeaderButton>
                            <SaleComicsHeaderButton>
                                <ArrowRight size={22} />
                            </SaleComicsHeaderButton>
                        </div>
                    </SaleComicsHeader>
                    <SaleComicsProducts>
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
