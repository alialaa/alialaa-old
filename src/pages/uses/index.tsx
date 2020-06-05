import React from "react";
import { Link } from "gatsby";
import { SEO } from "@components";
import styles from "./_uses.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Uses = ({ data }: any) => {
    return (
        <div css={styles}>
            <SEO title="Uses" />
            <div className="container">
                <h1 className="page-title">Uses</h1>
            </div>
        </div>
    );
};

export default Uses;
