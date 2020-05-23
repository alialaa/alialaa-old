module.exports = {
    siteMetadata: {
        title: `Ali Alaa's Personal Website`,
        description: ``,
        author: `@alialaa`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout.tsx`)
            }
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
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
