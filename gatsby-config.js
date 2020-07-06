module.exports = {
    siteMetadata: {
        title: `Ali Alaa - Front-end Web Developer`,
        description: `A freelance front-end web developer from Egypt. Here you can find my latest articles, courses, tutorials and more.`,
        author: `@alialaa`,
        siteUrl: `https://www.alialaa.dev`
    },
    plugins: [
        `gatsby-plugin-twitter`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-170033469-1"
            }
        },
        "gatsby-plugin-webpack-bundle-analyser-v2",
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                showSpinner: false
            }
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout.tsx`)
            }
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-remark-images`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                remarkPlugins: [require("remark-unwrap-images")],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                            showCaptions: ["title"]
                            // markdownCaptions: true
                        }
                    }
                ]
            }
        },
        `gatsby-plugin-emotion`,
        {
            resolve: "gatsby-plugin-module-resolver",
            options: {
                root: "./src",
                aliases: {
                    "@components": "./components",
                    "@context": "./context",
                    "@utils": "./utils",
                    "@images": "./images",
                    "@hooks": "./hooks",
                    "@svgs": "./svgs",
                    three$: "./three",
                    "../../../build/three.module.js": "./three",
                    static: {
                        root: "./public", // <- will used as this alias' root dir
                        alias: "./static" // <- will become ./public/static
                    }
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ali Alaa`,
                short_name: `alialaa`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
                cache_busting_mode: `none`
            }
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                workboxConfig: {
                    globPatterns: ["**/*"]
                }
            }
        }
    ]
};
