import { css } from "@emotion/core";

const styles = css`
    color: var(--purple);
    text-decoration: none;
    font-weight: 700;
    max-width: 100%;
    min-width: 120px;
    display: inline-block;
    text-align: center;
    border: 3px solid;
    padding: 0.7rem 1.4rem;
    border-image: linear-gradient(90deg, #3f51b5 0%, #6638ba 100%) 1;
    background: linear-gradient(90deg, #3f50b4 0%, #6638ba 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
    &:hover {
        background: linear-gradient(90deg, #3f51b5 0%, #6638ba 100%);
        color: #fff;
        -webkit-background-clip: initial;
        -webkit-text-fill-color: initial;
    }
    &:focus {
        background: #fff;
        color: #000;
        border-color: #fff;
        border-image: none;
        -webkit-background-clip: initial;
        -webkit-text-fill-color: initial;
    }
    &.dark {
        border-image: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%) 1;
        background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &:hover {
            background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
            color: #fff;
            -webkit-background-clip: initial;
            -webkit-text-fill-color: initial;
        }
        &:focus {
            background: #fff;
            color: #000;
            border-color: #fff;
            border-image: none;
            -webkit-background-clip: initial;
            -webkit-text-fill-color: initial;
        }
    }
`;

export default styles;
