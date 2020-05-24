import home from "./home";
import { graphql } from "gatsby";

export const query = graphql`
    query HomeQuery {
        blogImage: file(relativePath: { eq: "gutenberg-editor-wires.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        blogImage2: file(relativePath: { eq: "spilled-milk-wordpress.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        courseImage: file(relativePath: { eq: "ghactionscover.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        featuredCourse: course {
            id
            title
            url
            published_title
        }
        featuredCourseReviews: allCourseReview(
            filter: {
                course: { id: { eq: "x015vNbBDIRfbZt9qM09qkwzA==" } }
                content: { regex: "/^.{10,}$/" }
            }
        ) {
            edges {
                node {
                    content
                    user {
                        title
                    }
                }
            }
        }
    }
`;
export default home;
