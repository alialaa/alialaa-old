import { css } from "@emotion/react";

const styles = css`
    .container {
        max-width: max(60vw, 1100px);
        padding: 0 2rem;
        margin: 0 auto;
        z-index: 10;
        &.wide {
            max-width: max(60vw, 1200px);
        }
    }
`;

export default styles;
