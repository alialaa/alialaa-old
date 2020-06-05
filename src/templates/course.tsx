import React from "react";
import { Link } from "gatsby";

const Courses = (props: any) => {
    const { pageContext } = props;
    const { title, udemyID } = pageContext;
    return (
        <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
            {title} {udemyID}
        </div>
    );
};
export default Courses;
