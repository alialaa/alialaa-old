import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { SEO } from "@components";
import styles from "./_courses.styles";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Courses = ({ data }: any) => {
    const { pathname } = useLocation();
    return (
        <div css={styles}>
            <SEO title="Courses" pathname={pathname} />
            <div className="container">
                <h1 className="page-title">Courses</h1>
                <p className="page-intro">
                    In 2018, I decided to start creating online content. I use{" "}
                    <a href="https://www.udemy.com/user/ali-alaa-3/">udemy</a> to publish online
                    courses. <br />I enjoy creating these courses and I am planning to cover various
                    front-end, web and mobile development topics. Here you can find what I have done
                    so far.
                </p>
                {data.courses.edges.map((course: any) => {
                    return (
                        <article key={course.node.udemyID}>
                            <Img fluid={course.node.image.childImageSharp.fluid} alt="" />
                            <h2>{course.node.title}</h2>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export const query = graphql`
    query CoursesQuery {
        courses: allCourse {
            edges {
                node {
                    id
                    udemyID
                    title
                    url
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
export default Courses;
