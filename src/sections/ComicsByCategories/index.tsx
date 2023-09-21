import { ArrowRight } from "phosphor-react";
import {
  ComicBycategoriesCardContent,
  ComicsByCategoriesContainer,
  ComicsByCategoriesContentCards,
  ComicsByCategoriesContentCardsButton,
} from "./index.tyles";

const comics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const ComicsByCategories = () => {
  return (
    <ComicsByCategoriesContainer>
      <p>By categories</p>
      <ComicsByCategoriesContentCards>
        {comics.map((item) => (
          <ComicBycategoriesCardContent key={item}>
            <img src="" alt="comics" />
            <strong>Comic name</strong>
            <span>#99999</span>
          </ComicBycategoriesCardContent>
        ))}
      </ComicsByCategoriesContentCards>
      <ComicsByCategoriesContentCardsButton>
        <ArrowRight size={22} />
      </ComicsByCategoriesContentCardsButton>
    </ComicsByCategoriesContainer>
  );
};
