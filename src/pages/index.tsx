import home from "./home/_home";
import { graphql } from "gatsby";

export const query = graphql`
    query HomeQuery {
        posts: allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
            edges {
                node {
                    id
                    excerpt
                    timeToRead
                    frontmatter {
                        title
                        slug
                        date
                        tags
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 550) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        courseImage: file(relativePath: { eq: "ghactionscover.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        featuredCourseReviews: allCourseReview(
            limit: 3
            filter: {
                course: { id: { eq: "x015vNbBDIRfbZt9qM09qkwzA==" } }
                content: { regex: "/.{80,}$/" }
            }
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
export default home;
