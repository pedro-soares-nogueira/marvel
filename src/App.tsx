import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes/light";
import { GlobalStyle } from "./styles/globals";
import { Home } from "./pages/home";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Home />
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
