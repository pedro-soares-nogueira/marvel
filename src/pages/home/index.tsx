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
import { useEffect, useRef, useState } from "react";
import md5 from "md5";
import axios from "axios";
import { format } from "date-fns";

/* const comics = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
];
 */
interface IComics {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: unknown[]; // Você pode especificar o tipo correto para textObjects se necessário
    resourceURI: string;
    urls: {
        type: string;
        url: string;
    }[];
    series: {
        resourceURI: string;
        name: string;
    };
    variants: {
        resourceURI: string;
        name: string;
    }[];
    collections: unknown[]; // Você pode especificar o tipo correto para collections se necessário
    collectedIssues: unknown[]; // Você pode especificar o tipo correto para collectedIssues se necessário
    dates: {
        type: string;
        date: string;
    }[];
    prices: {
        type: string;
        price: number;
    }[];
    thumbnail: {
        path: string;
        extension: string;
    };
    images: unknown[]; // Você pode especificar o tipo correto para images se necessário
    creators: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
            role: string;
        }[];
        returned: number;
    };
    characters: {
        available: number;
        collectionURI: string;
        items: unknown[]; // Você pode especificar o tipo correto para items se necessário
        returned: number;
    };
    stories: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
            type: string;
        }[];
        returned: number;
    };
    events: {
        available: number;
        collectionURI: string;
        items: unknown[]; // Você pode especificar o tipo correto para items se necessário
        returned: number;
    };
}

const baseURL = "http://gateway.marvel.com/v1/public/comics";
const privateKey = "b64b13b35b9650b0597a8fa60e6b5497cfac20b3";
const publicKey = "116c3ab0e15b79bb6c80e9681213a7b1";

const timestemp = Number(new Date());
const hash = md5(timestemp + privateKey + publicKey);

export const Home = () => {
    const [comics, setComics] = useState<IComics[]>([]);
    const carousel = useRef<HTMLDivElement>(null);

    const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    useEffect(() => {
        axios
            .get(`${baseURL}?ts=${timestemp}&apikey=${publicKey}&hash=${hash}`)
            .then((response) => setComics(response.data.data.results))
            .catch((error) => console.error(error));
    }, []);

    console.log(comics);

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
                        {comics.map((item) => {
                            const { id, dates, title, thumbnail } = item;

                            const parsedDate = new Date(dates[0].date);
                            const formattedDate = format(
                                parsedDate,
                                "dd/MM/yyyy"
                            );
                            console.log(thumbnail);
                            return (
                                <ComicCard key={id}>
                                    <ComicCardHeader>
                                        <span>{formattedDate}</span>
                                        <span>#{id}</span>
                                    </ComicCardHeader>
                                    <ComicImage
                                        src={`${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`}
                                        alt="comics"
                                    />
                                    <ComicName>{title}</ComicName>
                                    <ComicCardButton>More</ComicCardButton>
                                </ComicCard>
                            );
                        })}
                    </SaleComicsProducts>
                </SaleComics>
            </SaleComicsContainer>
        </section>
    );
};
