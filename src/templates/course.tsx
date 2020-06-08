import React from "react";
import { SEO } from "@components";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Courses = (props: any) => {
    const { pathname } = useLocation();
    const { pageContext } = props;
    const { title, udemyID } = pageContext;
    return (
        <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
            <SEO title={title} description="" pathname={pathname} />
            {title} {udemyID}
        </div>
    );
};
export default Courses;
