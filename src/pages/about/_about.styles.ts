import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    padding: 8rem 0;
    .content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 4rem;
        align-items: center;
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
    }
`;

export default styles;
