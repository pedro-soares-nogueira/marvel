import { Container } from "../App.styles";
import { Navbar } from "../components/Navbar";

export const Home = () => {
    return (
        <section>
            <Container>
                <Navbar />
                <h1>Hello word</h1>
            </Container>
        </section>
    );
};
