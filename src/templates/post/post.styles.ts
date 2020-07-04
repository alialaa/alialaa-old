import { css } from "@emotion/core";
import { mq } from "@utils";

export const courseHeaderOverrides = css`
    overflow: visible;
    position: absolute;
    width: 100%;
    .content {
        position: relative;
    }
    ${mq.only("small")} {
        position: relative;
        background: #05010f;
        overflow: hidden;
        .canvas-wrap {
            height: 100% !important;
        }
    }
`;

const styles = css``;

export default styles;
