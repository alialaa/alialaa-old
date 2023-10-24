const axios = require("axios");
const path = require("path");
const fs = require("fs");
const yaml = require("js-yaml");
const _ = require("lodash");
const readingTime = require("reading-time");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    // const ymlDoc = yaml.safeLoad(fs.readFileSync("./content/courses.yml", "utf-8"));
    // ymlDoc.forEach(course => {
    //     // const { name, ext } = path.parse(course.image);
    //     // const absolutePath = path.resolve(__dirname, "./src/images/", course.image);
    //     // console.log('absolutePath', absolutePath)
    //     // const imageData = {
    //     //     name,
    //     //     ext,
    //     //     absolutePath,
    //     //     extension: ext.substring(1)
    //     // };
    //     // const imageNode = {
    //     //     ...imageData,
    //     //     id: createNodeId(`course-image-${course.udemyID}`),
    //     //     internal: {
    //     //         type: "CourseImage",
    //     //         contentDigest: createContentDigest(imageData)
    //     //     }
    //     // };
    //     // console.log(imageNode);
    //     // actions.createNode(imageNode);

    //     const node = {
    //         ...course,
    //         id: createNodeId(`Course-${course.udemyID}`),
    //         // image: imageNode,
    //         internal: {
    //             type: "Course",
    //             contentDigest: createContentDigest(course)
    //         }
    //     };
    //     actions.createNode(node);
    // });

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

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    // COURSE PAGES ######################################
    const { data } = await graphql(`
        query {
            allCoursesYaml {
                edges {
                    node {
                        url
                        udemyID
                    }
                }
            }
        }
    `);
    data.allCoursesYaml.edges.forEach(edge => {
        const url = edge.node.url;
        const udemyID = edge.node.udemyID;
        createPage({
            path: `/courses/${url}`,
            component: require.resolve("./src/templates/course/course.tsx"),
            context: {
                url: url,
                udemyID: udemyID,
                lengthRegex: "/^.{80,400}$/"
                // lengthRegex:
                //     udemyID === "x015vNbBDIRfbZt9qM09qkwzA==" ? "/^.{10,700}$/" : "/^.{80,400}$/" //due to lack of reviews lollzzz
            }
        });
    });

    // POST PAGES ######################################
    const postsResult = await graphql(`
        query {
            allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
                edges {
                    node {
                        id
                        frontmatter {
                            slug
                        }
                    }
                    next {
                        frontmatter {
                            slug
                            title
                        }
                    }
                    previous {
                        frontmatter {
                            slug
                            title
                        }
                    }
                }
            }
            tagsGroup: allMdx(limit: 2000) {
                group(field: frontmatter___tags) {
                    fieldValue
                    totalCount
                }
            }
        }
    `);
    if (postsResult.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }
    const posts = postsResult.data.allMdx.edges;
    const postsPerPage = 10;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
            component: path.resolve("./src/templates/blog/blog.tsx"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1
            }
        });
    });

    const generateTagSlug = tag => {
        return tag.split(" ").join("-").toLowerCase();
    };

    const tags = postsResult.data.tagsGroup.group;
    tags.forEach(tag => {
        const numPages = Math.ceil(tag.totalCount / postsPerPage);
        Array.from({ length: numPages }).forEach((x, i) => {
            console.log(generateTagSlug(tag.fieldValue));
            createPage({
                path:
                    i === 0
                        ? `/tags/${generateTagSlug(tag.fieldValue)}`
                        : `/tags/${generateTagSlug(tag.fieldValue)}/page/${i + 1}`,
                component: path.resolve("./src/templates/tag/tag.tsx"),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1,
                    tag: tag.fieldValue,
                    tagSlug: generateTagSlug(tag.fieldValue)
                }
            });
        });
    });

    posts.forEach(({ node, next, previous }) => {
        createPage({
            path: `/blog/${node.frontmatter.slug}`,
            component: path.resolve(`./src/templates/post/post.tsx`),
            context: { id: node.id, next, previous }
        });
    });
};

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        createNodeField({
            node,
            name: `timeToRead`,
            value: readingTime(node.body)
        });
    }
};
