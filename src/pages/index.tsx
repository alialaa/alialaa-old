import React from "react";
import { Link } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import { css } from "@emotion/core";

const IndexPage = () => (
    <>
        <SEO title="Home" />
        <h1
            css={css`
                background: #f03;
            `}
        >
            Hi peoples
        </h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </>
);

export default IndexPage;
