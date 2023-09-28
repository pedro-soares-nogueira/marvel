import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes/light";
import { GlobalStyle } from "./styles/globals";
import { Home } from "./pages/home";
import { Provider } from "react-redux";
import { store } from "./reducers/store";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <Home />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
