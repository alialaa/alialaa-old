import { css } from "@emotion/core";
import { mq } from "@utils";

const styles = css`
    padding: 8rem 0;
    h2 {
        font-weight: 800;
        font-size: calc(3.4rem + 1.7vw);
        margin-bottom: 3rem;
    }
    p {
        font-size: 2.1rem;
    }
    ul {
        font-size: 1.9rem;
        margin: 3rem 0;
        padding: 0;
        list-style: none;
        li {
            margin-bottom: 3rem;
            padding-left: 40px;
            &:before {
                content: "";
                width: 14px;
                height: 14px;
                left: 0;
                position: absolute;
                background: linear-gradient(90deg, #c11dd4 0%, #8c44db 100%);
                border-radius: 100%;
                box-shadow: 1px 1px 0 black;
                top: 9px;
            }
        }
    }
    .course-production {
        margin-bottom: 8rem;
        .course-production-image {
            grid-column: 2;
            margin-bottom: 6rem;
        }
        .course-production-title {
            align-self: center;
            grid-column: 1;
            grid-row: 1;
        }
        @media screen and (min-width: ${890 / 16}em) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 6rem;
            .course-production-image {
                margin-bottom: 0rem;
            }
        }
    }
`;

export default styles;
