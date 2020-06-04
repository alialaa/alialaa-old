import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    padding: 3rem;
    background: linear-gradient(0deg, #c11dd4 0%, #8c44db 100%);
    /* max-width: 400px; */
    width: 100%;
    box-shadow: 4px 4px 0 #441a4a;
    border: 1px solid #441a4a;
    h3 {
        font-weight: 800;
        text-shadow: 2px 2px 0 #130f1e;
        font-size: calc(3rem + 0.9vw);
        color: #fff;
    }
    p {
        margin-bottom: 3rem;
        color: #fff;
        /* text-shadow: 1px 1px #130f1e; */
        font-size: 1.7rem;
        font-weight: 500;
    }
    input {
        width: 100%;
        border: none;
        background: #ffffff;
        height: 45px;
        margin-bottom: 2rem;
        box-shadow: 1.5px 1.5px 0 #622876;
        border: 1px solid #2c0e36;
        padding: 0 1.5rem;
        &:focus {
            outline: 4px solid #2c0e36;
            border: 4px solid #ac2dd7;
        }
    }
    button {
        color: #ffffff;
        padding: 1.3rem 2.8rem;
        font-size: 1.6rem;
        width: 100%;
        &:focus {
            outline: 3px solid #2d0e36;
        }
        &:before {
            background: #6e1b77;
        }
    }
    .message {
        color: #ffffff;
        font-weight: 500;
        text-shadow: 1px 1px 0 #0000004f;
        &.error {
            padding: 1rem;
            margin-bottom: 2rem;
            background: #ff004f;
            box-shadow: 1px 1px 0 #710a2a;
            border: 1px solid #710a2a;
        }
        &.success {
            background: #14c386;
            padding: 1rem;
            margin-bottom: 2rem;
            box-shadow: 1px 1px 0 #042b1d;
            border: 1px solid #042b1d;
        }
    }
`;

export default styles;
