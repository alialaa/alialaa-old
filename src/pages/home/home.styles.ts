import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    .wrapper {
        padding: 4rem 0;
        p {
            margin: 0;
            font-size: 2.2rem;
            font-weight: 300;
            ${mq.largerThan("small")} {
                font-size: 2.5rem;
            }
            ${mq.largerThan("medium")} {
                font-size: 2.7rem;
            }
            a {
                font-weight: 400;
            }
        }
    }
`;

export default styles;
