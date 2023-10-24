import { css } from "@emotion/react";
import { mq } from "@utils";

const styles = css`
    padding: 8rem 0;
    .main {
        ${mq.largerThan("medium")} {
            display: grid;
        }
        grid-template-columns: repeat(16, 1fr);
        gap: 6rem;
        .content {
            grid-column: span 10;
            margin-bottom: 8rem;
            ${mq.largerThan("medium")} {
                margin-bottom: 0;
            }
            p .twitter-mention-button {
                vertical-align: middle;
            }
            ul {
                margin: 2.4rem 0;
                padding: 0;
                list-style: none;
                li {
                    margin-bottom: 2rem;
                    padding-left: 38px;
                    &:before {
                        content: "";
                        width: 18px;
                        height: 4px;
                        left: 0;
                        position: absolute;
                        background: linear-gradient(90deg, #c11dd4 0%, #8c44db 100%);
                        box-shadow: 1px 1px 0 black;
                        top: 14px;
                    }
                }
            }
            h2 {
                font-weight: 700;
                font-size: 3rem;
            }
        }
        .sidebar {
            grid-column: span 6;
            .twitter {
                padding: 0 2rem;
                .header {
                    padding: 2rem 0;
                    h3 {
                        text-shadow: 2px 2px var(--text-shadow);
                        font-weight: 800;
                        margin-bottom: 1.3rem;
                        /* color: #fff; */
                    }
                }
                &.light {
                    .light {
                        display: block;
                    }
                    .dark {
                        display: none;
                    }
                }
                &.dark {
                    .dark {
                        display: block;
                    }
                    .light {
                        display: none;
                    }
                }
            }
        }
    }
`;

export default styles;
