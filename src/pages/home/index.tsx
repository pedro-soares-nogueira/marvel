import { Hero } from "../../sections/Hero";
import { Navbar } from "../../components/Navbar";
import { CarouselSection } from "../../sections/CarouselSection";
import { Contact } from "../../sections/Contact";

export const Home = () => {
  return (
    <section style={{ margin: "0rem 0rem 3rem" }}>
      <Navbar />
      <Hero />
      <CarouselSection />
      <Contact />
    </section>
  );
};
