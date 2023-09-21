import { Hero } from "../../sections/Hero";
import { Navbar } from "../../components/Navbar";
import { CarouselSection } from "../../sections/CarouselSection";
import { Contact } from "../../sections/Contact";
import { Footer } from "../../components/Footer";
import { ComicsByCategories } from "../../sections/ComicsByCategories";

export const Home = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <CarouselSection />
      <Contact />
      <ComicsByCategories />
      <Footer />
    </section>
  );
};
