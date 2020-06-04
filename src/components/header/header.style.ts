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
const rayPos = "15%";
const styles = css`
    position: relative;
    overflow: hidden;
    .content {
        position: absolute;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 5rem 1.5rem;
        pointer-events: none;
        top: 0;
        left: 0;
        @media screen and (max-width: ${890 / 16}em) {
            position: relative;
            padding: 14rem 1.5rem 6rem;
        }
        ${mq.lessThan("small")} {
            padding: 6rem 1.5rem;
        }
    }
    .canvas-wrap {
        padding-top: 47%;
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
        background-color: #030008;
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
        margin-top: 1rem;
        ${mq.lessThan("medium")} {
            margin-top: 1rem;
        }
        ul {
            margin: 0;
            list-style: none;
            pointer-events: auto;
            padding: 0;
            text-align: center;
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
                        font-weight: 700;
                        border-bottom: 2px solid var(--purple2);
                        border-image: linear-gradient(90deg, #c11dd4 0%, #8c44db 100%) 1;
                        &[data-focus-visible-added] {
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
    .toggle-buttons {
        position: absolute;
        top: 20px;
        left: 15px;
        z-index: 100;
        display: flex;
        ${mq.lessThan("small")} {
            position: relative;
            top: 0;
            left: 0;
            justify-content: center;
            margin-top: -3rem;
            margin-bottom: 6rem;
        }
    }

    .toggle-button {
        background: transparent;
        border: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        padding: 8px;
        margin: 0 5px;
        &[data-focus-visible-added] {
            outline: none;
            background-color: rgba(255, 255, 255, 0.2);
        }
        .toggle-button-text {
            color: #ffffff;
            font-size: 11px;
            margin: 0;
            margin-top: 10px;
            ${mq.lessThan("small")} {
                font-size: 10px;
            }
        }
    }
    .animations-button {
        height: 26px;
        width: 26px;
        box-sizing: content-box;
        ${mq.lessThan("medium")} {
            height: 20px;
            width: 20px;
        }
        &.animations-inactive {
            .circles {
                .circle {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .circles {
            width: 100%;
            height: 100%;
            .circle {
                position: absolute;
                width: 50%;
                height: 50%;
                background: #fff;
                border-radius: 100%;
                transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                &.circle_1 {
                    opacity: 0.9;
                    bottom: 0;
                    right: 0;
                }
                &.circle_2 {
                    opacity: 0.5;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                }
                &.circle_3 {
                    opacity: 0.2;
                    top: 0;
                    left: 0;
                }
            }
        }
    }
    .color-scheme-button {
        height: 26px;
        width: 26px;
        box-sizing: content-box;
        ${mq.lessThan("medium")} {
            height: 20px;
            width: 20px;
        }
        &.no-motion {
            .moon,
            .sun,
            .body,
            .ray {
                transition: none !important;
            }
        }
        @media (prefers-reduced-motion: reduce) {
            .moon,
            .sun,
            .body,
            .ray {
                transition: none !important;
            }
        }
        &.light-active {
            .moon {
                opacity: 0;
                transform: scale(0.5) rotateZ(-60deg);
                transition-delay: 0s;
            }
            .sun {
                opacity: 1;
                .body {
                    transform: scale(1);
                    opacity: 1;
                }
                .ray {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
        &.dark-active {
            .moon {
                opacity: 1;
                transform: scale(1) rotateZ(0deg);
            }
            .sun {
                /* opacity: 0; */
                .body {
                    transform: scale(0);
                    opacity: 0;
                }
                .ray {
                    transform: scale(0) !important;
                    opacity: 0;
                }
            }
        }
        .moon,
        .sun {
            height: 100%;
            width: 100%;
        }
        .sun {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            .body {
                width: 45%;
                height: 45%;
                background-color: #fff;
                border-radius: 100%;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .ray {
                width: 3px;
                height: 3px;
                background-color: #fff;
                border-radius: 100%;
                position: absolute;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                &.small {
                    width: 2px;
                    height: 2px;
                }
                &.ray_0 {
                    top: ${rayPos};
                    left: ${rayPos};
                    transition-delay: 0s;
                }
                &.ray_1 {
                    top: 0;
                    left: 50%;
                    transform: scale(1) translateX(-50%);
                    transition-delay: 0.15s;
                }
                &.ray_2 {
                    top: ${rayPos};
                    right: ${rayPos};
                    transition-delay: 0.2s;
                }
                &.ray_3 {
                    top: 50%;
                    right: 0;
                    transform: scale(1) translateY(-50%);
                    transition-delay: 0.1s;
                }
                &.ray_4 {
                    bottom: ${rayPos};
                    right: ${rayPos};
                    transition-delay: 0s;
                }
                &.ray_5 {
                    bottom: 0;
                    left: 50%;
                    transform: scale(1) translateX(-50%);
                    transition-delay: 0.25s;
                }
                &.ray_6 {
                    bottom: ${rayPos};
                    left: ${rayPos};
                    transition-delay: 0.1s;
                }
                &.ray_7 {
                    top: 50%;
                    left: 0;
                    transform: scale(1) translateY(-50%);
                    transition-delay: 0.35s;
                }
            }
        }
        .moon {
            transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transition-delay: 0.35s;
            svg {
                width: 100%;
                height: 100%;
            }
        }
    }
`;

export default styles;
