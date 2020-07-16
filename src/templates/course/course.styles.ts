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

const styles = css`
    /* padding: 6rem 0; */
    .header {
        overflow: hidden;
        padding-top: 32rem;
        padding-bottom: 8rem;
        background: #05010f;
        ${mq.only("small")} {
            padding-top: 6rem;
            padding-bottom: 6rem;
        }
        &:after {
            content: "";
            width: 100%;
            height: 4px;
        }
        /* h1 {
            color: #eef0fd;
        }
        p {
            color: #eef0fd;
        } */
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
                margin-bottom: 20px;
            }
        }
    }
    .title {
        font-size: calc(3rem + 1.5vw);
        font-weight: 800;
        margin-bottom: 4rem;
        color: #ffffff;
    }
    .intro {
        z-index: 50;
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
        .video {
            border: 1px solid var(--card-border);
            video {
                width: 100%;
            }
            &:after {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    -161deg,
                    var(--purple) 0%,
                    var(--purple2) 50%,
                    var(--card-border) 100%
                );
                top: 4px;
                left: 4px;
                z-index: -1;
            }
        }
    }
    .summary {
        font-size: calc(2rem + 0.5vw);
        margin-bottom: 7rem;
    }
    .buy-button,
    .buy-button.dark {
        max-width: 100%;
        padding: 20px 45px;
        font-size: 2.2rem;
        color: #ffffff;
        &:before {
            background: var(--card-border);
        }
        &:after {
            background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
        }
        &:hover {
            &:before {
                background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
            }
            &:after {
                background: #000;
            }
        }
        &.dark {
            &:hover {
                color: #000;
                &:after {
                    background: #fff;
                }
            }
        }
    }
    .objectives {
        margin-top: 2rem;
        margin-bottom: 3rem;
        padding: 6rem 0;
        z-index: 20;
        ${mq.largerThan("small")} {
            margin-top: 6rem;
        }
        /* background: linear-gradient(130deg, #943eda 0%, #c11ed5 100%); */
        svg {
            position: absolute;
            width: 100%;
            top: 0;
            opacity: 0.03;
            left: 0;
            transform: translateY(-42%);
            &.dark {
                opacity: 0.045;
            }
        }
        h2 {
            /* text-shadow: 2px 2px #502b65; */
        }
        .buy-button-wrap {
            text-align: center;
            margin-top: 9rem;
        }

        ul {
            padding: 0;
            margin: 0;
            list-style: none;
            /* color: #fff; */
            font-size: 2rem;
            font-weight: 500;
            columns: 1;
            gap: 4rem;
            background: var(--card);
            border: 1px solid var(--card-border);
            padding: 3rem 2rem;
            ${mq.largerThan("small")} {
                columns: 2;
                padding: 4rem 3rem;
            }
            ${mq.largerThan("medium")} {
                columns: 2;
                padding: 5rem 4rem;
            }
            &:after {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    -161deg,
                    var(--purple) 0%,
                    var(--purple2) 50%,
                    var(--card-border) 100%
                );
                top: 3px;
                left: 3px;
                z-index: -1;
            }
            li {
                margin-bottom: 3rem;
                -webkit-column-break-inside: avoid;
                page-break-inside: avoid;
                break-inside: avoid;
                padding-left: 42px;
                &:after {
                    content: "";
                    width: 32px;
                    height: 32px;
                    background-size: 32px 32px;
                    position: absolute;
                    top: 2px;
                    left: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='%23c11ed5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z'/%3E%3C/svg%3E");
                }
            }
        }
    }
    #reviews {
        svg.bg {
            position: absolute;
            width: 100%;
            top: 0;
            opacity: 0.03;
            left: 0;
            transform: translateY(-42%);
            &.dark {
                opacity: 0.045;
            }
        }
    }
    .reviews-wrap {
        .buy-button-wrap {
            text-align: center;
            margin-top: 4rem;
            ${mq.largerThan("medium")} {
                margin-top: 9rem;
            }
        }
        .all-courses-link {
            margin-top: 4rem;
            font-size: 2.2rem;
            font-weight: 700;
            display: inline-block;
        }
    }
    .reviews {
        /* display: grid; */
        list-style: none;
        padding: 0;
        margin: 0;
        columns: 1;
        gap: 4rem;
        z-index: 10;
        ${mq.largerThan("medium")} {
            columns: 2;
        }
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
                background: linear-gradient(
                    -161deg,
                    var(--purple) 0%,
                    var(--purple2) 50%,
                    var(--card-border) 100%
                );
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
