import { css, keyframes } from "@emotion/core";

const dash = keyframes`
  from {
		stroke-dashoffset: 2000;
	}
	to {
		stroke-dashoffset: 0;
	}
`;
const styles = css`
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 4rem 0;
    pointer-events: none;
    h1 {
        pointer-events: auto;
    }
    .navigation {
        margin-top: 2rem;
        ul {
            margin: 0;
            list-style: none;
            pointer-events: auto;
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
