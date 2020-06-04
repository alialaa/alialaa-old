import React from "react";
import { Link } from "gatsby";
import { SEO } from "@components";
import styles from "./_courses.styles";

const Courses = () => (
    <div css={styles}>
        <SEO title="Page two" />
        <div className="container">
            <h1>Courses</h1>
            <Link to="/">Go back to the homepage</Link>
        </div>
    </div>
);

export default Courses;
