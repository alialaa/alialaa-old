import React from "react";
import { Link } from "gatsby";
import { SEO } from "@components";
import styles from "./_contact.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Contact = ({ data }: any) => {
    return (
        <div css={styles}>
            <SEO title="Contact" />
            <div className="container">
                <h1 className="page-title">Contact</h1>
            </div>
        </div>
    );
};

export default Contact;
