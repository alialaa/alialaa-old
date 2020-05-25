import { css } from "@emotion/core";
import typography from "./typography";
import grid from "./grid";
import utility from "./utility";

const styles = css`
    :root {
        --purple: #2f1264;
        --purple2: #c11dd4;
        --pink: #ee1d90;
        --bg: #f9f5fd;
        --text: #000;
        --links: #000;
        &[data-dark="true"] {
            --bg: #05010f;
            --text: #eef0fd;
            --links: #fff;
        }
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-color: var(--bg);
        font-family: "Visby", Arial, Helvetica, sans-serif;
        letter-spacing: 0.5px;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6;
        color: var(--text);
        text-align: left;
    }
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        position: relative;
    }
    .gatsby-image-wrapper picture {
        position: static;
    }
    ${typography}
    ${grid}
    ${utility}
`;

export default styles;
