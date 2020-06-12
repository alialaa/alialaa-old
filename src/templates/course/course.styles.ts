import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    /* padding: 6rem 0; */
    .header {
        overflow: hidden;
        padding-top: 32rem;
        padding-bottom: 8rem;
        &:after {
            content: "";
            width: 100%;
            height: 4px;
        }
        h1 {
            color: #eef0fd;
        }
        p {
            color: #eef0fd;
        }
        .header-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            .gatsby-image-wrapper {
                height: 100%;
            }
            &:after {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background: radial-gradient(ellipse, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.96) 72%);
            }
        }
    }
    .title-wrap {
        width: 100%;
        max-width: 750px;
        .hours {
            background: linear-gradient(45deg, #8d43db, #bf1fd5);
            font-size: calc(1rem + 0.6vw);
            padding: 4px 10px;
            font-weight: 500;
            margin-bottom: 2rem;
            color: #ffffff;
            display: inline-block;
            font-size: 1.4rem;
        }
        .buttons {
            a {
                margin-right: 20px;
            }
        }
    }
    .title {
        font-size: calc(3rem + 1.5vw);
        font-weight: 800;
        margin-bottom: 4rem;
        color: #ffffff;
    }
    .content {
        padding: 8rem 0;
        h2 {
            font-size: calc(3.4rem + 1vw);
            font-weight: 800;
            margin-top: 2rem;
            margin-bottom: 3rem;
            text-shadow: 2px 2px var(--text-shadow);
            margin: 0 0 5rem 0;
        }
    }
    .summary {
        font-size: calc(2rem + 0.5vw);
        margin-bottom: 6rem;
    }
    .objectives {
        margin-top: 6rem;
        margin-bottom: 6rem;
    }
    .reviews {
        /* display: grid; */
        list-style: none;
        padding: 0;
        margin: 0;
        columns: 2;
        gap: 4rem;
        z-index: 10;
        &.dark {
            blockquote {
                footer {
                    color: #dedfe6;
                }
            }
        }
        li {
            background: var(--card);
            border: 1px solid var(--card-border);
            padding: 4rem 4rem;
            text-align: center;
            margin-bottom: 4rem;
            width: 100%;
            -webkit-column-break-inside: avoid;
            page-break-inside: avoid;
            break-inside: avoid;
            blockquote {
                margin: 0;
                p {
                    font-size: 2rem;
                    line-height: 1.8;
                    font-weight: 600;
                    margin-bottom: 2rem;
                }
                footer {
                    font-size: 1.8rem;
                    font-weight: 500;
                    color: #3d3e48;
                }
            }
            &:after {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background: linear-gradient(-161deg, #943eda 0%, #c11ed5 50%, #441a4a 100%);
                top: 3px;
                left: 3px;
                z-index: -1;
            }
            svg {
                width: 180px;
                max-width: 100%;
                margin-bottom: 1.5rem;
                .cls-1 {
                    fill: #b825d6;
                }
                .cls-2 {
                    fill: #e4e44a;
                }
            }
        }
    }
`;

export default styles;
