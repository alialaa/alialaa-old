import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    padding: 8rem 0;
    .content {
        ${mq.largerThan("mediumSmall")} {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 4rem;
            section {
                grid-column: 1 / span 8;
            }
            aside {
                grid-column: 10 / span 3;
            }
        }
    }
    .posts-list {
        list-style: none;
        margin: 0;
        padding: 0;
        li.post {
            margin-bottom: 6rem;
        }
    }
    .sidebar {
        margin-top: 6rem;
        ${mq.largerThan("mediumSmall")} {
            margin-top: 0;
        }
        h3 {
            font-weight: 800;
            margin-bottom: 2rem;
            color: var(--titles);
        }
        ul.tags-list {
            margin: 0;
            padding: 0;
            list-style: none;
            font-size: 1.6rem;
            &.dark {
                li a {
                    &:focus {
                        outline-color: #fff;
                    }
                }
            }
            li {
                display: inline-block;
                margin: 0 1rem 1rem 0;
                a {
                    /* font-weight: 400; */
                    background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
                    color: #fff;
                    padding: 0.5rem 1rem;
                    &:focus {
                        outline-color: #000;
                    }
                }
            }
        }
    }
`;

export default styles;
