import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { SEO } from "@components";
import styles from "./_about.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const About = ({ data }: any) => {
    const { pathname } = useLocation();
    return (
        <div css={styles}>
            <SEO title="About" pathname={pathname} />
            <div className="container">
                <h1 className="page-title">About</h1>
            </div>
        </div>
    );
};

export default About;
