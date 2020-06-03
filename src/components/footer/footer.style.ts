import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    padding: 8rem 0;
    /* background: #130f1e; */
    background: #130f1e;
    /* border-top: 1px solid #9141da; */
    /* border-image: linear-gradient(90deg, #c11dd4 0%, #8c44db 100%) 1; */
    .footer-row {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 80px;
        color: #eef0fd;
        .links {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            h3 {
                font-weight: 800;
                font-size: 2.4rem;
            }
            ul {
                padding: 0;
                margin: 0;
                list-style: none;
                li {
                    /* display: inline-block; */
                    /* margin-right: 2rem; */
                    a {
                        font-weight: 500;
                        font-size: 1.6rem;
                        color: #eef0fd;
                    }
                }
            }
            .quick {
                /* margin-bottom: 3rem; */
            }
            /* .external {
                ul {
                    li {
                        display: block;
                        margin-right: 0;
                    }
                }
            } */
        }
    }
    .logo {
        text-align: center;
        padding: 12rem 0 2rem;
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
