import { css } from "@emotion/core";

const styles = css`
    color: #000;
    font-size: 1.4rem;
    text-decoration: none;
    font-weight: 700;
    max-width: 100%;
    min-width: 120px;
    text-align: center;
    display: inline-block;
    padding: 1rem 2rem;
    z-index: 10;
    border: none;
    cursor: pointer;
    letter-spacing: 0.5px;
    &.dark {
        color: #ffffff;
        &:after {
            background: #130f1e;
            border: 1px solid #c5b1c8;
        }
        &:hover {
            color: #000;
            &:after {
                background: #ffffff;
                border: 1px solid #441a4a;
            }
        }
    }
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
        top: 3px;
        left: 3px;
        z-index: -1;
    }
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #ffffff;
        top: 0;
        left: 0;
        z-index: -1;
        border: 1px solid #441a4a;
    }
    &:hover {
        color: #fff;
        &:after {
            background: #1a1624;
            border: 1px solid #c5b1c8;
        }
    }
    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }
    /* color: var(--purple);
    text-decoration: none;
    font-weight: 700;
    max-width: 100%;
    min-width: 120px;
    display: inline-block;
    text-align: center;
    border: 3px solid;
    padding: 0.7rem 1.4rem;
    border-image: linear-gradient(-90deg, #221d28 0%, #000000 100%) 1;
    background: linear-gradient(-90deg, #221d28 0%, #000000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
    &:before {
        content: "";
    }
    &:after {
        content: "";
    }
    &:hover,
    &.filled {
        background: linear-gradient(-90deg, #221d28 0%, #000000 100%);
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
        border-image: linear-gradient(-90deg, #ffffff 0%, #e1d4ef 100%) 1;
        background: linear-gradient(-90deg, #ffffff 0%, #e1d4ef 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &:hover,
        &.filled {
            background: linear-gradient(-90deg, #ffffff 0%, #e1d4ef 100%);
            color: #000;
            -webkit-background-clip: initial;
            -webkit-text-fill-color: initial;
        }
    }
    &.filled:hover {
        border-image: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%) 1;
        background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
        color: #fff;
        -webkit-background-clip: initial;
        -webkit-text-fill-color: initial;
    }
    &.purple {
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
    } */
`;

export default styles;
