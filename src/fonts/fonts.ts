import { createGlobalStyle } from "styled-components";

import ArialRegular from "../fonts/arial/ArialRegular.ttf";
import ArialBold from "../fonts/arial/ArialBold.ttf";
import ArialBlack from "../fonts/arial/ArialBlack.ttf";
import ArialLight from "../fonts/arial/ArialLight.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Arial-Regular';
        src: local('Arial-Regular'), local('ArialRegular'),
        url(${ArialRegular}) format('ttf');
    }
    @font-face {
        font-family: 'Arial-Bold';
        src: local('Arial-Bold'), local('ArialBold'),
        url(${ArialBold}) format('ttf');
    }
    @font-face {
        font-family: 'Arial-Black';
        src: local('Arial-Black'), local('ArialBlack'),
        url(${ArialBlack}) format('ttf');
    }
    @font-face {
        font-family: 'Arial-Light';
        src: local('Arial-Light'), local('ArialLight'),
        url(${ArialLight}) format('ttf');
    }
`;