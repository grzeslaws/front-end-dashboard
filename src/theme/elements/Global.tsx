import { createGlobalStyle } from "..";
import boxSizing from "../generic/box-sizing";
import normalize from "../generic/normalize";
import reset from "../generic/reset";
import fonts from "../settings/fonts";
import { customScrollBar } from "../utils/scrollBar";

export const GlobalStyle = createGlobalStyle`
    ${boxSizing}
    ${normalize}
    ${reset}
    ${fonts}
    ${p => customScrollBar(p.theme.colors.primaryDark(0.2))}

    html,
    body {
        color: ${p => p.theme.colors.primaryDark()};
        font-family: ${p => p.theme.fonts.fontFamilyDefault};
        font-weight: ${p => p.theme.fonts.fontLight};
        height: 100%;
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        overflow-x: hidden;  
    }
`;
