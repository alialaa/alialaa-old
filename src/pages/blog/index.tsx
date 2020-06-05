import React from "react";
import { Link } from "gatsby";
import { SEO } from "@components";
import styles from "./_blog.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Blog = ({ data }: any) => {
    return (
        <div css={styles}>
            <SEO title="The Blog" />
            <div className="container">
                <h1 className="page-title">The Blog</h1>
            </div>
        </div>
    );
};

export default Blog;
