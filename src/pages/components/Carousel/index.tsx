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
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAppDispatch, useAppSelector } from "../../../reducers/store";
import { getAllComics } from "../../../reducers/slices/comicsSlice";

register();

export const Carousel = () => {
  const dispatch = useAppDispatch();

  const { comics } = useAppSelector((store) => store.comics);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    dispatch(getAllComics());
  }, []);

  useEffect(() => {
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
      {comics?.length ? (
        <Swiper
          style={{ height: "26rem" }}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".arrow-left",
            prevEl: ".arrow-right",
          }}
        >
          {comics.map((item) => {
            const { id, dates, title, thumbnail } = item;

            const parsedDate = new Date(dates[0].date);
            const formattedDate = format(parsedDate, "dd/MM/yyyy");
            return (
              <SwiperSlide key={item.id}>
                <ComicCard>
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
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Skeleton height={300} width={220} />
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
