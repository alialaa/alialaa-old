import home from "./home/_home";
import { graphql } from "gatsby";

export const query = graphql`
    query HomeQuery {
        posts: allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
            edges {
                node {
                    id
                    excerpt
                    # timeToRead
                    frontmatter {
                        title
                        slug
                        date
                        tags
                        featuredImage {
                            childImageSharp {
                                gatsbyImageData(width: 550, layout: CONSTRAINED)
                            }
                        }
                    }
                }
            }
        }
        courseImage: file(relativePath: { eq: "ghactionscover.jpg" }) {
            childImageSharp {
                gatsbyImageData(width: 900, layout: CONSTRAINED)
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
