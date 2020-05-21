import { css } from "@emotion/core";

const styles = css`
    .visually-hidden,
    .skip-link {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
    .skip-link:focus {
        background: var(--purple);
        display: inline-block;
        left: 2rem;
        top: 2rem;
        position: absolute;
        width: auto;
        height: auto;
        z-index: 200;
        color: #fff;
        padding: 0.85rem 2rem;
        font-weight: 500;
    }
`;

export default styles;
