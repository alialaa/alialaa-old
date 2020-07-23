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
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        &:hover {
            a.anchor {
                display: inline-block;
                position: relative;
                width: auto;
                height: auto;
                left: auto;
                overflow: visible;
            }
        }
    }
    img,
    .gatsby-resp-image-wrapper,
    .gatsby-resp-image-figure {
        max-width: 100%;
        margin: 3rem 0;
        display: block;
    }
    .gatsby-resp-image-figure .gatsby-resp-image-wrapper {
        margin: 0;
    }
    h2 {
        margin: 8rem 0 2.5rem;
    }
    p {
        font-size: 1.95rem;
        margin: 2rem 0;
    }
    a.anchor {
        width: 30px;
        text-align: center;
        margin-right: 10px;
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
        &:focus {
            display: inline-block;
            position: relative;
            width: auto;
            height: auto;
            left: auto;
            overflow: visible;
        }
        svg {
            width: 23px;
            height: 23px;
            path {
                fill: var(--text);
            }
        }
    }
    b,
    strong {
        font-weight: 600;
        a {
            font-weight: 600;
        }
    }
    .custom-block.lead p {
        font-size: 2.1rem;
        margin-bottom: 6rem;
        font-weight: 500;
        display: block;
        a {
            font-weight: 600;
        }
    }
    ul,
    ol {
        padding: 0;
        padding-left: 1rem;
        list-style-position: inside;
        font-size: 1.95rem;
        margin: 2rem 0;
        font-weight: 400;
        li {
            margin-bottom: 1rem;
        }
    }
    .gatsby-resp-iframe-wrapper {
        margin: 6rem 0;
    }
    .progress {
        position: fixed;
        top: 0px;
        z-index: 100;
        left: 0px;
        width: 100%;
        height: 5px;
        progress {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: none;
            background-color: transparent;
            color: var(--purple);
        }
        progress::-webkit-progress-bar {
            background-color: transparent;
        }

        progress::-webkit-progress-value {
            background-color: transparent;
            background-image: linear-gradient(-90deg, var(--purple) 0%, var(--purple2) 100%);
        }

        progress::-moz-progress-bar {
            background-color: transparent;
            background-image: linear-gradient(-90deg, var(--purple) 0%, var(--purple2) 100%);
        }
    }
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

        .title {
            font-size: calc(3rem + 1.5vw);
            font-weight: 800;
            margin-bottom: 2rem;
            color: #ffffff;
        }
        .info {
            color: #fff;
            font-size: 1.8rem;
            font-weight: 500;
            margin-bottom: 1.2rem;
            opacity: 0.86;
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
            margin-top: 5rem;
        }
    }
    .post-content {
        padding: 5rem 0 8rem;
        .post-content-inner {
            width: 100%;
            max-width: 850px;
        }
    }
    .tags {
        margin: 0;
        padding: 0;

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
                    outline-color: #fff;
                }
            }
        }
    }
    #post-footer {
        padding: 0 0 8rem 0;
        .tags-edit {
            display: flex;
            flex-direction: column;
            font-size: 1.8rem;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 4rem;
            ${mq.largerThan("small")} {
                flex-direction: row;
            }
            .tags-wrap {
                font-weight: 600;
                margin-bottom: 2rem;
                p {
                    margin-top: 0;
                    margin-bottom: 1.6rem;
                }
                ul.tags {
                    li {
                        font-size: 1.7rem;
                        a {
                            &:focus {
                                outline-color: var(--links);
                            }
                        }
                    }
                }
            }
            .edit-link {
                font-weight: 600;
                svg {
                    width: 20px;
                    margin-right: 5px;
                    vertical-align: middle;
                    path {
                        fill: var(--text);
                    }
                }
            }
        }
        .posts-navigation {
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                ${mq.largerThan("small")} {
                    flex-direction: row;
                }
                li {
                    width: 100%;
                    margin-bottom: 2rem;
                    ${mq.largerThan("small")} {
                        width: 48%;
                    }
                    a {
                        width: 100%;
                        height: 100%;
                        padding: 2rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-decoration: none;
                        span.post-nav-subtitle {
                            font-size: 1.6rem;
                            font-weight: 600;
                            opacity: 0.7;
                        }
                        span.post-nav-title {
                            font-size: 1.4rem;
                            text-decoration: underline;
                            font-size: 2.2rem;
                            font-weight: 800;
                        }
                    }
                    &.post-nav-prev {
                    }
                    &.post-nav-next {
                        text-align: right;
                        a {
                            align-items: flex-end;
                        }
                    }
                }
            }
        }
    }
`;

export default styles;
