const axios = require("axios");
const path = require("path");
const fs = require("fs");
const yaml = require("js-yaml");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const ymlDoc = yaml.safeLoad(fs.readFileSync("./content/courses.yml", "utf-8"));
    ymlDoc.forEach(course => {
        const { name, ext } = path.parse(course.image);
        const absolutePath = path.resolve(__dirname, "./src/images/", course.image);
        const imageData = {
            name,
            ext,
            absolutePath,
            extension: ext.substring(1)
        };
        const imageNode = {
            ...imageData,
            id: createNodeId(`course-image-${course.udemyID}`),
            internal: {
                type: "CourseImage",
                contentDigest: createContentDigest(imageData)
            }
        };
        actions.createNode(imageNode);

        const node = {
            ...course,
            id: createNodeId(`Course-${course.udemyID}`),
            image: imageNode,
            internal: {
                type: "Course",
                contentDigest: createContentDigest(course)
            }
        };
        actions.createNode(node);
    });

    const reviews = await axios.get(
        "https://www.udemy.com/instructor-api/v1/taught-courses/reviews?fields[course]=id,title,published_title&fields[course_review]=content,rating,course,user&star=5&page_size=100&status=commented",
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

exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
        query {
            allCourse {
                edges {
                    node {
                        url
                        udemyID
                    }
                }
            }
        }
    `);
    data.allCourse.edges.forEach(edge => {
        const url = edge.node.url;
        const udemyID = edge.node.udemyID;
        console.log(udemyID);
        actions.createPage({
            path: `/courses/${url}`,
            component: require.resolve("./src/templates/course.tsx"),
            context: { url: url, udemyID: udemyID }
        });
    });
};
