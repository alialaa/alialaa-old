import { css, keyframes } from "@emotion/core";
import { mq } from "@utils";
const dash = keyframes`
  from {
		stroke-dashoffset: 2000;
	}
	to {
		stroke-dashoffset: 0;
	}
`;
const styles = css`
    position: relative;
    .content {
        position: absolute;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 4rem 1.5rem;
        pointer-events: none;
        top: 0;
        left: 0;
        @media screen and (max-width: ${890 / 16}em) {
            position: relative;
            padding: 6rem 1.5rem;
        }
    }
    .canvas-wrap {
        padding-top: 50%;
        position: relative;
        @media screen and (max-width: ${890 / 16}em) {
            padding-top: 0;
            height: 100%;
            width: 100%;
            position: absolute;
        }
    }
    .canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    h1 {
        pointer-events: auto;
        svg {
            ${mq.lessThan("medium")} {
                width: 90px;
                height: 48px;
            }
        }
    }
    .navigation {
        margin-top: 2rem;
        ${mq.lessThan("medium")} {
            margin-top: 1rem;
        }
        ul {
            margin: 0;
            list-style: none;
            pointer-events: auto;
            padding: 0;
            li {
                display: inline-block;
                &:after {
                    content: "/";
                    color: #fff;
                    margin: 0 0.5rem;
                }
                &:last-child:after {
                    content: none;
                }
                a {
                    color: #ffffff;
                    text-decoration: none;
                    ${mq.lessThan("medium")} {
                        font-size: 1.4rem;
                    }
                    &.active {
                        font-weight: 600;
                        border-bottom: 2px solid var(--pink);
                        &:focus {
                            border-bottom: none;
                        }
                    }
                }
            }
        }
    }
    #l_s {
        fill: rgba(255, 255, 255, 1);
        transition: fill 0.7s;
        &.animate {
            fill: rgba(255, 255, 255, 0);
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
            animation: ${dash} 3s linear infinite;
        }
    }
`;

export default styles;
