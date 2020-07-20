import { css } from "@emotion/core";

const styles = css`
    padding: 2rem;
    &.dark {
        .tags li a:focus {
            outline-color: #fff;
        }
        h2.title a {
            color: #ffffff;
        }
    }
    .gatsby-image-wrapper {
        margin-bottom: 2rem;
    }
    h2.title {
        font-size: calc(2.8rem + 0.5vw);
        margin-bottom: 2rem;
        a {
            font-weight: 800;
            color: #000000;
        }
    }
    p.excerpt {
        margin: 1.4rem 0 1rem;
        font-size: calc(1.7rem + 0.13vw);
    }
    .info {
        color: var(--links);
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 0.8rem;
        p {
            margin: 0;
            font-size: inherit;
            display: inline-block;
            &:before {
                content: "|";
                margin: 0 0.7rem;
            }
        }
    }
    .tags {
        margin: 0;
        padding: 0;
        margin-top: 3rem;
        list-style: none;
        li {
            display: inline-block;
            margin-right: 1rem;
            margin-bottom: 1rem;
            font-size: 1.5rem;
            a {
                background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
                color: #fff;
                padding: 0.5rem 1rem;
                &:focus {
                    outline-color: #000;
                }
            }
        }
    }
`;

export default styles;
