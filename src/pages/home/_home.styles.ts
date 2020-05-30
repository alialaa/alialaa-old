import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    .intro {
        padding: 3rem 0 3rem;
        ${mq.largerThan("small")} {
            padding: 8rem 0 5rem;
        }
        h2 {
            position: absolute;
            left: -10000px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
            @media screen and (max-width: ${890 / 16}em) {
                position: relative;
                left: auto;
                width: auto;
                height: auto;
                font-size: calc(4rem + 1.2vw);
                font-weight: 800;
                margin-top: 2rem;
                margin-bottom: 3rem;
                text-shadow: 2px 2px var(--text-shadow);
                span {
                    margin-top: 1rem;
                    display: inline-block;
                    font-size: 85%;
                }
            }
            ${mq.lessThan("small")} {
                margin-bottom: 3rem;
                font-size: 4.2rem;
            }
        }
        p {
            margin: 0;
            font-size: 2.1rem;
            font-weight: 400;
            ${mq.largerThan("small")} {
                font-size: 2.5rem;
            }
            ${mq.largerThan("medium")} {
                font-size: 2.7rem;
            }
            a {
                font-weight: 500;
            }
        }
    }
    .latest-articles-section {
        /* background-color: #05010f; */
        /* background: linear-gradient(0deg, #251d38 0%, #05010f 100%); */
        z-index: 10;
    }
    .latest-articles {
        padding: 4rem 0;
        svg {
            position: absolute;
            width: 100%;
            opacity: 0.03;
            left: 0%;
            top: -5%;
            ${mq.largerThan("medium")} {
                width: 70%;
                left: -12%;
                top: -5%;
            }
        }
        &.dark svg {
            opacity: 0.045;
        }
        ${mq.largerThan("small")} {
            padding: 8rem 0 8rem;
        }
        h3 {
            font-size: calc(4rem + 1.2vw);
            font-weight: 800;
            margin-top: 2rem;
            margin-bottom: 3rem;
            text-shadow: 2px 2px var(--text-shadow);
        }
        &.dark {
            /* h3 {
                text-shadow: 2px 2px var(--purple2);
            } */
            .posts {
                .post {
                    background-color: #13101d;
                    box-shadow: -1px -1px 0 0 #241e32;
                    border: 2px solid #241e32;
                    border-top: none;
                    border-left: none;
                    h4 {
                        a {
                            color: #ffffff;
                        }
                    }
                    .tags li a:focus {
                        outline-color: #fff;
                    }
                }
            }
        }
        .posts {
            display: grid;
            grid-template-columns: 1fr;
            .title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            ${mq.largerThan("small")} {
                grid-template-columns: repeat(2, 1fr);
                .title {
                    grid-area: auto / span 2 / auto / auto;
                }
            }
            ${mq.largerThan("medium")} {
                grid-template-columns: 1fr repeat(2, 1.4fr);
                .title {
                    grid-area: auto;
                    display: block;
                }
            }
            gap: 30px;
            .post {
                background-color: #ffffff;
                box-shadow: 0 0 12px 6px #0000000f;
                display: flex;
                flex-direction: column;
                padding: 1.6rem;
                padding-bottom: 0.6rem;
                border: 2px solid #f0e6fc;
                box-shadow: -1px -1px 0 0 #f0e5fb;
                border-top: none;
                border-left: none;
                /* &:before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    background: #fff;
                    top: 0;
                    left: 0;
                    opacity: 0.2;
                    z-index: 10;
                }
                &:after {
                    content: "";
                    position: absolute;
                    height: 100%;
                    width: 1px;
                    background: #fff;
                    top: 0;
                    left: 0;
                    opacity: 0.07;
                } */
                h4 {
                    a {
                        font-weight: 700;
                        color: #000000;
                    }
                }
                .info {
                    color: var(--links);
                    font-size: 1.4rem;
                    font-weight: 500;
                    margin-bottom: 5px;
                    p {
                        margin: 0;
                        font-size: inherit;
                        display: inline-block;
                    }
                }
                p {
                    margin: 1.8rem 0 0;
                    font-size: 1.7rem;
                }
                .tags {
                    margin: 0;
                    padding: 0;
                    margin-top: 2.4rem;
                    list-style: none;
                    li {
                        display: inline-block;
                        margin-right: 1rem;
                        margin-bottom: 1rem;
                        font-size: 1.4rem;
                        a {
                            background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
                            color: #fff;
                            padding: 3px 7px;
                            &:focus {
                                outline-color: #000;
                            }
                        }
                    }
                }
                .post-inner {
                    padding: 2rem 0.4rem 0.4rem 0.4rem;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    justify-content: space-between;
                }
            }
        }
    }
    .featured-course {
        padding: 4rem 0;
        z-index: 10;
        &.dark {
            .gatsby-image-wrapper:after {
                background: radial-gradient(ellipse, rgba(6, 0, 16, 0.76), var(--bg) 72%);
            }
            .course-info h4 {
                /* text-shadow: 2px 2px var(--purple2); */
            }
            .course-reviews li {
                border: 2px solid #2b2439;
                border-top: none;
                border-left: none;
                background: #0f0b199c;
                box-shadow: -1px -1px 0 0 #2b2439;
            }
        }
        .gatsby-image-wrapper:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: radial-gradient(ellipse, rgba(249, 245, 253, 0.71), var(--bg) 72%);
        }
        .course-image {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
        }
        .course-info-wrap {
            min-height: calc(min(100vw - 4rem, 960px) * 844 / 1500);
        }
        .course-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            ${mq.largerThan("small")} {
                width: 70%;
            }
            .course-buttons {
                margin-top: 3rem;
                a {
                    margin-right: 2rem;
                    margin-bottom: 2rem;
                }
            }
            h3 {
                align-self: flex-start;
                background: linear-gradient(45deg, #8d43db, #bf1fd5);
                font-size: calc(1rem + 0.6vw);
                padding: 5px 12px;
                font-weight: 800;
                margin-bottom: 2rem;
                color: #ffffff;
            }
            h4 {
                /* font-size: 5rem; */
                /* font-size: calc(2rem + 2vw); */
                font-size: calc(2.8rem + 1.5vw);
                font-weight: 800;
                /* text-shadow: 2px 2px #c85fd4; */
            }
            p {
                font-size: calc(1.8rem + 0.2vw);
            }
        }
        .course-reviews {
            margin-top: 4rem;
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 2rem;
                ${mq.only("medium")} {
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 3rem;
                    li:last-child {
                        grid-area: auto / span 2 / auto / auto;
                    }
                }
                ${mq.largerThan("medium")} {
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 3rem;
                }
                li {
                    border: 2px solid #f0e5fb;
                    padding: 3rem 2rem;
                    background: #ffffffcf;
                    text-align: center;
                    border-top: none;
                    border-left: none;
                    box-shadow: -1px -1px 0 0 #f0e5fb;
                    &:before {
                        content: "";
                    }
                    svg {
                        width: 150px;
                        max-width: 100%;
                        margin-bottom: 1.5rem;
                        .cls-1 {
                            fill: #b825d6;
                        }
                        .cls-2 {
                            fill: #e4e44a;
                        }
                    }
                    blockquote {
                        margin: 0;
                        p {
                            font-size: 1.8rem;
                            font-weight: 500;
                        }
                        footer {
                            font-size: 1.5rem;
                            font-weight: 400;
                            opacity: 0.75;
                        }
                    }
                }
            }
        }
        .more-courses {
            margin-top: 4rem;
            text-align: right;
            a {
                font-weight: 700;
                font-size: 2rem;
                text-decoration: none;
                display: inline-block;
                line-height: 1;
                &:focus {
                    &:before {
                        display: none;
                    }
                }
                &:before {
                    content: "";
                    position: absolute;
                    height: 2px;
                    width: 100%;
                    left: 0;
                    bottom: -1px;
                    background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
                    /* z-index: -1; */
                }
            }
        }
    }
    .testimonials {
        padding: 6rem 0;
        &.dark {
            /* h3 {
                text-shadow: 2px 2px var(--purple2);
            } */
            ul li {
                background: #13101d;
                border: 1px solid #c5b1c9;
            }
            svg {
                opacity: 0.05;
            }
        }
        svg {
            position: absolute;
            width: 100%;
            opacity: 0.03;
            left: 0%;
            top: -10%;
            ${mq.largerThan("small")} {
                width: 100%;
                left: 0;
                top: -35%;
            }
        }
        h3 {
            font-size: calc(4rem + 1.2vw);
            font-weight: 800;
            margin-top: 2rem;
            margin-bottom: 3rem;
            text-shadow: 2px 2px var(--text-shadow);
            margin: 0 0 5rem 0;
            text-align: center;
        }
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            ${mq.largerThan("small")} {
                grid-template-columns: repeat(2, 1fr);
            }
            li {
                padding: 3rem;
                background: #fff;
                border: 1px solid #441a4a;
                /* border-image: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%) 1; */
                &:after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
                    top: 4px;
                    left: 4px;
                    z-index: -1;
                }
                blockquote {
                    margin: 0;
                    p {
                        font-size: 2rem;
                        font-weight: 500;
                        ${mq.largerThan("small")} {
                            font-size: 2.4rem;
                        }
                    }
                    footer {
                        font-size: 1.6rem;
                        opacity: 0.75;
                        ${mq.largerThan("small")} {
                            font-size: 1.8rem;
                        }
                        a {
                            font-weight: 600;
                        }
                    }
                }
                &:last-child {
                    ${mq.largerThan("small")} {
                        grid-area: auto / span 2 / auto / auto;
                    }
                }
            }
        }
    }
`;

export default styles;
