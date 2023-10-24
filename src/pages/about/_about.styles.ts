import { css } from "@emotion/react";
import { mq } from "@utils";

const styles = css`
    padding: 8rem 0;
    .content {
        @media screen and (min-width: ${890 / 16}em) {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 4rem;
            align-items: center;
        }
        h2 {
            font-weight: 800;
            font-size: calc(3rem + 1.5vw);
            line-height: 1.2;
            margin-bottom: 3rem;
            text-shadow: 2px 2px var(--text-shadow);
        }
        h3 {
            font-weight: 800;
            font-size: calc(3rem + 1.3vw);
            line-height: 1.2;
            margin-bottom: 2.6rem;
            text-shadow: 2px 2px var(--text-shadow);
        }
        .grid-item {
            margin-bottom: 4rem;
            ${mq.largerThan("mediumSmall")} {
                margin-bottom: 0;
            }
        }
        .portrait-image {
            grid-column: 8 / span 5;
            grid-row: 1;
        }
        .intro-text {
            grid-column: 1 / span 6;
            grid-row: 1;
            /* margin-top: 4rem; */
        }
        .uni-image {
            grid-row: 5;
            grid-column-start: 1;
            grid-column-end: span 6;
        }
        .beginnings {
            grid-row: 5;
            grid-column: 8 / span 5;
            /* margin-top: 1rem; */
        }
        .themeforest-image {
            grid-row: 7;
            grid-column: 7 / span 6;
        }
        .themeforest-text {
            grid-column: 1 / span 5;
            grid-row: 7;
            /* margin-top: 1rem; */
        }
        .job-text {
            grid-column: 1 / span 6;
            grid-row: 9;
        }
        .job-text-2 {
            grid-column: 1 / span 10;
            grid-row: 10;
        }
        .job-testimonial {
            grid-column: 8 / span 5;
            grid-row: 9;
        }
        .testimonial {
            .shadow {
                padding: 3rem;
                font-weight: 500;
                margin-top: 4rem;
                blockquote,
                p {
                    font-size: 2.2rem;
                    padding: 0;
                    margin: 0;
                }
            }
        }
        .freelancing-text {
            grid-column: 1 / span 6;
            grid-row: 12;
        }
        .freelancing-testimonial {
            grid-column: 8 / span 5;
            grid-row: 12;
        }
        .freelancing-tweet-1 {
            grid-column: 1 / span 6;
            grid-row: 14;
        }
        .freelancing-tweet-2 {
            grid-column: 8 / span 5;
            grid-row: 14;
        }
        .courses-text {
            grid-column: 7 / span 6;
            grid-row: 14;
        }
        .desk-image {
            grid-column: 1 / span 5;
            grid-row: 14;
        }
        .course-testimonials {
            grid-column: 1 / span 12;
            grid-row: 15;
            figcaption {
                margin-top: 1.6rem;
                text-align: center;
            }
            .course-testimonials-items {
                ${mq.largerThan("mediumSmall")} {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 4rem;
                }
                .shadow {
                    grid-column-end: span 4;
                    margin-top: 2rem;
                    align-items: center;
                    display: flex;
                    blockquote {
                        p {
                            font-size: 2rem;
                            text-align: center;
                        }
                    }
                }
            }
        }
        .more-text {
            grid-column: 1 / span 6;
            grid-row: 17;
        }
        .more-image {
            grid-column: 8 / span 5;
            grid-row: 17;
        }
    }
`;

export default styles;
