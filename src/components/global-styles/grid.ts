import { css } from "@emotion/core";

const styles = css`
    .container {
        max-width: max(60vw, 1080px);
        padding: 0 2rem;
        margin: 0 auto;
        z-index: 10;
        &.wide {
            max-width: max(60vw, 1180px);
        }
    }
`;

export default styles;
