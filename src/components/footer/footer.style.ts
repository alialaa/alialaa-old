import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    padding: 8rem 0;
    /* background: #130f1e; */
    background: #130f1e;
    /* background: #070212; */
    /* border-top: 1px solid #9141da; */
    /* border-image: linear-gradient(90deg, #c11dd4 0%, #8c44db 100%) 1; */
    .footer-row {
        display: grid;
        grid-template-columns: 1fr;
        gap: 60px;
        color: #eef0fd;
        @media screen and (min-width: ${800 / 16}em) {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
        }
        ${mq.largerThan("medium")} {
            grid-template-columns: 1fr 1.2fr;
            gap: 80px;
        }
        .links {
            display: grid;
            grid-template-columns: 1fr;
            gap: 50px;
            align-content: flex-start;
            ${mq.largerThan("small")} {
                grid-template-columns: 1fr 1fr;
                gap: 30px;
            }
            h3 {
                font-weight: 800;
                font-size: 2.4rem;
                color: #fff;
            }
            ul {
                padding: 0;
                margin: 0;
                list-style: none;
                li {
                    /* display: inline-block; */
                    /* margin-right: 2rem; */
                    margin-bottom: 3px;
                    a {
                        font-weight: 500;
                        font-size: 1.6rem;
                        color: #eef0fd;
                    }
                }
            }
            .social {
                ${mq.largerThan("small")} {
                    grid-area: auto / span 2 / auto / auto;
                }
                h3 {
                    margin-bottom: 0.5rem;
                }
                ul {
                    /* display: flex; */
                    margin: 0 -15px;
                    li {
                        display: inline-block;
                        margin: 15px;
                        a {
                            span {
                                /* display: none; */
                            }
                            svg {
                                width: 25px;
                                vertical-align: middle;
                                margin-right: 15px;
                                path,
                                circle {
                                    fill: #eef0fd;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .logo {
        text-align: center;
        padding: 8rem 0 2rem;
        ${mq.largerThan("small")} {
            padding: 12rem 0 2rem;
        }
        svg {
            width: 60px;
            path {
                /* fill: var(--text); */
                fill: #eef0fd;
                stroke: #eef0fd;
            }
        }
    }
    .copyright {
        text-align: center;
        font-weight: 600;
        color: #eef0fd;
    }
`;

export default styles;
