import { ArrowLeft, ArrowRight } from "phosphor-react";
import { Hero } from "../../components/Hero";
import { Navbar } from "../../components/Navbar";
import {
  SaleComics,
  SaleComicsContainer,
  SaleComicsHeader,
  SaleComicsHeaderButton,
} from "./index.styles";
import { Carousel } from "../../components/Carousel";

export const Home = () => {
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
              <SaleComicsHeaderButton
                className="arrow-right"
                onClick={handleLeftClick}
              >
                <ArrowLeft size={22} />
              </SaleComicsHeaderButton>
              <SaleComicsHeaderButton
                className="arrow-left"
                onClick={handleRightClick}
              >
                <ArrowRight size={22} />
              </SaleComicsHeaderButton>
            </div>
          </SaleComicsHeader>
          {/* <SaleComicsProducts ref={carousel}>
            {comics.map((item) => {
              const { id, dates, title, thumbnail } = item;

              const parsedDate = new Date(dates[0].date);
              const formattedDate = format(parsedDate, "dd/MM/yyyy");
              console.log(thumbnail);
              return (
               
              );
            })}
          </SaleComicsProducts> */}
          <Carousel />
        </SaleComics>
      </SaleComicsContainer>
    </section>
  );
};
