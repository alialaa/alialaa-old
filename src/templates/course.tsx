import React from "react";
import { SEO } from "@components";
import { useLocation } from "@reach/router";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import FiveStarts from "@svgs/5starts";

const Courses = (props: any) => {
    const { pathname } = useLocation();
    const { data } = props;
    if (data.allCourse.nodes.length === 0) return null;
    const { title, summary, udemyUrl, image } = data.allCourse.nodes[0];
    return (
        <div className="container">
            <SEO title={title} description={summary} pathname={pathname} />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        name: title,
                        description: summary,
                        provider: {
                            "@type": "Organization",
                            name: "Udemy",
                            sameAs: "https://www.udemy.com/"
                        }
                    })}
                </script>
            </Helmet>
            <div>
                <Img fluid={image.childImageSharp.fluid} alt="" />
                <h1>{title}</h1>
                <p>{summary}</p>
            </div>
            <a href={udemyUrl}>Buy on Udemy</a>
            <ul>
                {data.reviews.edges.map((review: { [key: string]: any }) => {
                    return (
                        <li key={review.node.id}>
                            {/* <FiveStarts /> */}
                            <blockquote cite="https://www.udemy.com/course/github-actions">
                                <p>“{review.node.content}”</p>
                                <footer>
                                    — <cite>{review.node.user.title}</cite>
                                </footer>
                            </blockquote>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Courses;

export const query = graphql`
    query($url: String!, $udemyID: String!) {
        allCourse(filter: { url: { eq: $url } }) {
            nodes {
                title
                summary
                udemyID
                udemyUrl
                image {
                    childImageSharp {
                        fluid(maxWidth: 900) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        reviews: allCourseReview(
            limit: 9
            filter: { course: { id: { eq: $udemyID } }, content: { regex: "/.{10,}$/" } }
        ) {
            edges {
                node {
                    id
                    content
                    user {
                        title
                    }
                }
            }
        }
    }
`;
