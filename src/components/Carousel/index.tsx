import { motion } from "framer-motion";
import { RefObject, useRef, useState, useEffect } from "react";
import {
  CarouselHeroWrapper,
  CarouselWrapper,
  CarouselHeroImageWhapper,
  CarouselImage,
} from "./index.styles";
import image01 from "../../assets/carousel/image1.png";
import image02 from "../../assets/carousel/image2.png";
import image03 from "../../assets/carousel/image3.png";
import image04 from "../../assets/carousel/image4.png";

const images = [image01, image02, image03, image04];

export const Carousel = () => {
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
    <CarouselHeroWrapper>
      {/* CAROUSEL */}
      <CarouselWrapper ref={carousel} whileTap={{ cursor: "grabbing" }}>
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
  );
};
