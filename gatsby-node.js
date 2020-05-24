const axios = require("axios");
const path = require("path");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const courses = await axios.get(
        "https://www.udemy.com/instructor-api/v1/taught-courses/courses?fields[course]=@default,description",
        {
            headers: {
                Authorization: `Bearer ${process.env.UDEMY_API_TOKEN}`
            }
        }
    );
    courses.data.results.forEach(course => {
        const node = {
            ...course,
            course_id: course.id,
            id: createNodeId(`Course-${course.id}`),
            internal: {
                type: "Course",
                contentDigest: createContentDigest(course)
            }
        };
        actions.createNode(node);
    });

    const reviews = await axios.get(
        "https://www.udemy.com/instructor-api/v1/taught-courses/reviews?fields[course]=id,title,published_title&fields[course_review]=content,rating,course,user&star=5&page_size=500",
        {
            headers: {
                Authorization: `Bearer ${process.env.UDEMY_API_TOKEN}`
            }
        }
    );
    reviews.data.results.forEach(review => {
        const node = {
            ...review,
            review_id: review.id,
            id: createNodeId(`CourseReview-${review.id}`),
            internal: {
                type: "CourseReview",
                contentDigest: createContentDigest(review)
            }
        };
        actions.createNode(node);
    });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
    const courses = await graphql(`
        query {
            allCourse {
                edges {
                    node {
                        id
                        description
                        published_title
                        title
                        url
                    }
                }
            }
        }
    `);
    if (courses.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }
    const posts = courses.data.allCourse.edges;
    posts.forEach(({ node }) => {
        createPage({
            path: `courses/${node.published_title}`,
            component: path.resolve(`./src/components/image.tsx`),
            context: { id: node.id }
        });
    });
};
