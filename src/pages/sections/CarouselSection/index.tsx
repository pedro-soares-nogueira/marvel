import { ArrowLeft, ArrowRight } from "phosphor-react";
import { Carousel } from "../../components/Carousel";
import {
  SaleComicsContainer,
  SaleComics,
  SaleComicsHeader,
  SaleComicsHeaderButton,
} from "./index.styles";

export const CarouselSection = () => {
  return (
    <SaleComicsContainer>
      <SaleComics>
        <SaleComicsHeader>
          <span>
            Comics for <strong>SALE</strong>
          </span>
          <div>
            <SaleComicsHeaderButton className="arrow-right">
              <ArrowLeft size={22} />
            </SaleComicsHeaderButton>
            <SaleComicsHeaderButton className="arrow-left">
              <ArrowRight size={22} />
            </SaleComicsHeaderButton>
          </div>
        </SaleComicsHeader>
        <Carousel />
      </SaleComics>
    </SaleComicsContainer>
  );
};
