import { css } from "@emotion/react";
import { mq } from "@utils";

const styles = css`
    padding: 8rem 0;
    .courses-list {
        display: grid;
        gap: 4rem;
        grid-template-columns: 1fr;
        ${mq.largerThan("small")} {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }
        ${mq.largerThan("medium")} {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }
    }
    .course {
        background: var(--card);
        border: 1px solid var(--card-border);
        padding: 2rem;
        h2 {
            font-size: 2.8rem;
            margin-top: 2rem;
            margin-bottom: 1.6rem;
            a {
                font-weight: 700;
            }
        }
        p {
            font-size: 1.8rem;
        }
        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                -161deg,
                var(--purple) 0%,
                var(--purple2) 50%,
                var(--card-border) 100%
            );
            top: 3px;
            left: 3px;
            z-index: -1;
        }
    }
`;

export default styles;
