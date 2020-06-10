import { css } from "@emotion/core";
import { mq } from "@utils";
import typography from "./typography";
import grid from "./grid";
import utility from "./utility";

const styles = css`
    :root {
        --purple: #8c44db;
        --purple2: #c11dd4;
        --pink: #ee1d90;
        --bg: #f9f5fd;
        --text: #000;
        --links: #000;
        --text-shadow: #da80e5;
        --card: #ffffff;
        --card-border: #441a4a;
        &[data-dark="true"] {
            --bg: #05010f;
            --text: #eef0fd;
            --links: #fff;
            --text-shadow: #b531c4;
            --card: #13101d;
            --card-border: #c5b1c9;
            #main {
                @media screen and (min-width: ${890 / 16}em) {
                    background: linear-gradient(0deg, #070014 0%, #070014 50%, transparent 100%);
                }
            }
        }
    }
    #nprogress .bar {
        background: linear-gradient(90deg,#c11dd4 0%,#8c44db 100%) !important;
        height: 4px !important;
    }
    #nprogress .peg {
        box-shadow: none !important;
    }
    #main {
        &.blog, &.courses, &.about, &.contact, &.uses {
            @media screen and (min-width: ${890 / 16}em) {
                background-color: var(--bg);
                margin-top: -14%;
            }
            @media screen and (min-width: ${890 / 16}em) and (max-width: ${1280 / 16}em) { 
                margin-top: -8%;
            }
        }
        .page-intro {
            font-size: 2.2rem;
            margin-bottom: 6rem;
            /* max-width: max(80%,750px); */
            br {
                content: '';
                display: block;
                margin-bottom: 1rem
            }
        }
        .page-title {
            position: absolute;
            left: -10000px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
            @media screen and (max-width: ${890 / 16}em) {
                position: relative;
                left: auto;
                width: auto;
                height: auto;
                font-size: calc(4rem + 1.2vw);
                font-weight: 800;
                margin-top: 2rem;
                margin-bottom: 3rem;
                text-shadow: 2px 2px var(--text-shadow);
                span {
                    margin-top: 1rem;
                    display: inline-block;
                    font-size: 85%;
                }
            }
            ${mq.lessThan("small")} {
                margin-bottom: 3rem;
                font-size: 4.6rem;
            }
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
