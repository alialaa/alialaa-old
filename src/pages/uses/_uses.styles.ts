import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    padding: 8rem 0;
    h2 {
        font-weight: 800;
        font-size: calc(3.4rem + 1.7vw);
        margin-bottom: 1.6rem;
        line-height: 1.2;
        text-shadow: 2px 2px var(--text-shadow);
    }
    p {
        font-size: 2.1rem;
    }
    ul {
        font-size: 1.9rem;
        margin: 3rem 0;
        padding: 0;
        list-style: none;
        max-width: 800px;
        li {
            margin-bottom: 3rem;
            padding-left: 38px;
            &:before {
                content: "";
                width: 18px;
                height: 4px;
                left: 0;
                position: absolute;
                background: linear-gradient(90deg, #c11dd4 0%, #8c44db 100%);
                box-shadow: 1px 1px 0 black;
                top: 14px;
            }
        }
    }
    .coding {
        margin-top: 8rem;
        @media screen and (min-width: ${890 / 16}em) {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 8rem;
        }
        .coding-title {
            grid-column-end: span 4;
            svg {
                position: absolute;
                opacity: 0.035;
                width: 135%;
                left: -10%;
                top: -10%;
                display: none;
                @media screen and (min-width: ${890 / 16}em) {
                    display: block;
                }
                &.dark {
                    opacity: 0.04;
                }
            }
        }
        .coding-list {
            grid-column-end: span 8;
        }
    }
    .course-production {
        margin-bottom: 4rem;
        .course-production-image {
            grid-column: 6 / span 7;
            grid-row: 1;
            margin-bottom: 6rem;
        }
        .course-production-title {
            align-self: center;
            grid-column: 1 / span 5;
            grid-row: 1;
            svg {
                position: absolute;
                opacity: 0.035;
                width: 100%;
                left: -15%;
                top: -32%;
                display: none;
                @media screen and (min-width: ${890 / 16}em) {
                    display: block;
                }
                &.dark {
                    opacity: 0.04;
                }
            }
        }
        @media screen and (min-width: ${890 / 16}em) {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 8rem;
            margin-bottom: 8rem;
            .course-production-image {
                margin-bottom: 0rem;
            }
        }
    }
`;

export default styles;
