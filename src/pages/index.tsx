import React from "react";
import { Space, SEO } from "@components";
import { Link } from "gatsby";

const IndexPage = () => (
    <>
        <SEO title="Home" />
        <div style={{ paddingTop: "52%", position: "relative" }}>
            <Space />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </>
);

export default IndexPage;
