import React from "react";
import { Link } from "gatsby";
import { SEO } from "@components";
import styles from "./_about.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const About = ({ data }: any) => {
    return (
        <div css={styles}>
            <SEO title="About" />
            <div className="container">
                <h1 className="page-title">About</h1>
            </div>
        </div>
    );
};

export default About;
