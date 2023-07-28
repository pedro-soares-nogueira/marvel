import "styled-components";
import { lightTheme as defaultTheme } from "../styles/themes/light";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}
