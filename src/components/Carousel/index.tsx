import {
  CarouselHeroWrapper,
  ComicCard,
  ComicCardButton,
  ComicCardHeader,
  ComicImage,
  ComicName,
} from "./index.styles";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import md5 from "md5";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

register();

const baseURL = "http://gateway.marvel.com/v1/public/comics";
const privateKey = "b64b13b35b9650b0597a8fa60e6b5497cfac20b3";
const publicKey = "116c3ab0e15b79bb6c80e9681213a7b1";

const timestemp = Number(new Date());
const hash = md5(timestemp + privateKey + publicKey);

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
  textObjects: unknown[];
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
  collections: unknown[];
  collectedIssues: unknown[];
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
  images: unknown[];
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
    items: unknown[];
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
    items: unknown[];
    returned: number;
  };
}

export const Carousel = () => {
  const [comics, setComics] = useState<IComics[]>([]);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    axios
      .get(`${baseURL}?ts=${timestemp}&apikey=${publicKey}&hash=${hash}`)
      .then((response) => setComics(response.data.data.results))
      .catch((error) => console.error(error));
  }, []);
  console.log(comics);

  useEffect(() => {
    // responsive slider
    const handleResizeWindow = () => {
      if (window.innerWidth < 560) {
        setSlidesPerView(1);
      } else if (window.innerWidth > 560 && window.innerWidth < 810) {
        setSlidesPerView(2);
      } else if (window.innerWidth > 810 && window.innerWidth < 1014) {
        setSlidesPerView(3);
      } else if (window.innerWidth > 1014 && window.innerWidth < 1200) {
        setSlidesPerView(4);
      } else if (window.innerWidth > 1200) {
        setSlidesPerView(5);
      }
    };

    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <CarouselHeroWrapper>
      {comics.length ? (
        <Swiper
          style={{ height: "26rem" }}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        >
          {comics.map((item) => {
            const { id, dates, title, thumbnail } = item;

            const parsedDate = new Date(dates[0].date);
            const formattedDate = format(parsedDate, "dd/MM/yyyy");
            return (
              <SwiperSlide>
                <ComicCard key={item.id}>
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Skeleton height={300} width={220} />
          <Skeleton height={300} width={220} />
          <Skeleton height={300} width={220} />
          <Skeleton height={300} width={220} />
          <Skeleton height={300} width={220} />
        </div>
      )}
    </CarouselHeroWrapper>
  );
};
