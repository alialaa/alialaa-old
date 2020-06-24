import { css } from "@emotion/core";

const styles = css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        margin-bottom: 1rem;
        font-weight: 500;
        line-height: 1.3;
    }
    p {
        font-size: 1.6rem;
    }
    h1 {
        font-size: 4rem;
    }
    h2 {
        font-size: 3.5rem;
    }
    h3 {
        font-size: 3rem;
    }
    h4 {
        font-size: 2.5rem;
    }
    h5 {
        font-size: 2rem;
    }
    h6 {
        font-size: 1.6rem;
    }
    a {
        color: var(--links);
        font-weight: 500;
        text-decoration: underline;
    }
    p {
        margin: 0;
        font-size: 1.9rem;
        margin-bottom: 1.4rem;
        &.lead {
            font-size: 2.1rem;
        }
    }
    b,
    strong {
        font-weight: 600;
    }
    hr {
        background: linear-gradient(-90deg, #c30cff 0%, #3597a7 35%, #17408c 70%, #44d4db 100%);
        border: none;
        height: 4px;
    }
    ::selection {
        background-color: #c11dd4;
        color: white;
    }
    [data-js-focus-visible] {
        a,
        button,
        video {
            &:focus:not([data-focus-visible-added]) {
                outline: none;
            }
        }
        a,
        button,
        video {
            &[data-focus-visible-added] {
                outline: 3px solid var(--purple2);
            }
        }
    }
`;

export default styles;
