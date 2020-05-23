import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    .intro {
        padding: 8rem 0 5rem;
        p {
            margin: 0;
            font-size: 2.2rem;
            font-weight: 400;
            ${mq.largerThan("small")} {
                font-size: 2.5rem;
            }
            ${mq.largerThan("medium")} {
                font-size: 2.7rem;
            }
            a {
                font-weight: 400;
            }
        }
    }
    .latest-articles-section {
        /* background-color: #05010f; */
        /* background: linear-gradient(0deg, #251d38 0%, #05010f 100%); */
        svg {
            position: absolute;
            width: 45%;
            opacity: 0.045;
            left: 4%;
            top: -6%;
        }
    }
    .latest-articles {
        padding: 8rem 0;
        h3 {
            font-size: 5.5rem;
            font-weight: 700;
            margin-top: 2rem;
        }
        &.dark {
            .posts {
                .post {
                    background-color: #1a1623;
                    box-shadow: 0 0 12px 6px #00000052;
                    h4 {
                        a {
                            color: #ffffff;
                        }
                    }
                }
            }
        }
        .posts {
            display: grid;
            grid-template-columns: 1fr repeat(2, 1.4fr);
            gap: 30px;
            .post {
                background-color: #ffffff;
                box-shadow: 0 0 12px 6px #0000000f;
                &:before {
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
                }
                h4 {
                    a {
                        font-weight: 600;
                        color: #000000;
                    }
                }
                p {
                    margin: 2rem 0 0;
                    font-size: 1.7rem;
                }
                .post-inner {
                    padding: 2rem;
                    padding-bottom: 2.5rem;
                }
            }
        }
    }
`;

export default styles;
