import { css } from "@emotion/react";

const styles = css`
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    li {
        display: inline-block;
        margin: 1.5rem 0.75rem;
        &.disabled {
            opacity: 0.5;
        }
        a {
            padding: 0.6rem 1.7rem;
            background: var(--card);
            border: 1px solid var(--card-border);
            display: inline-block;
            text-decoration: none;
            font-weight: 600;
            &:hover,
            &[aria-current="page"] {
                background: linear-gradient(-161deg, var(--purple) 0%, var(--purple2) 100%);
                color: #fff;
                &:after {
                    background: var(--op-card);
                }
            }
            &[aria-disabled="true"] {
                pointer-events: none;
                cursor: not-allowed;
            }
            &:after {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    -161deg,
                    var(--purple) 0%,
                    var(--purple2) 100% /* var(--card-border) 100% */
                );
                top: 2px;
                left: 2px;
                z-index: -1;
            }
        }
    }
`;

export default styles;
