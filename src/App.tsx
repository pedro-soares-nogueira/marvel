import { ThemeProvider } from "styled-components";
import { Container } from "./App.styles";
import { Navbar } from "./components/Navbar";
import { lightTheme } from "./styles/themes/light";
import { GlobalStyle } from "./styles/globals";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Container>
                <Navbar />
                <h1>Hello word</h1>
            </Container>

            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
