import { css } from "@emotion/core";
import typography from "./typography";
import utility from "./utility";

const styles = css`
    :root {
        --purple: #2f1264;
        --pink: #ee1d90;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-family: "Visby", Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.5;
        color: #000000;
        text-align: left;
    }
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        position: relative;
    }
    ${typography}
    ${utility}
`;

export default styles;
