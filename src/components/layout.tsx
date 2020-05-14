import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import { Global, css } from "@emotion/core";

import "normalize.css";
import "./global-styles/font-visby.css";
import "./global-styles/font-dank.css";
import global from "./global-styles";
import typography from "./global-styles/typography";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Global
                styles={css`
                    ${global}
                    ${typography}
                `}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div id="#main">
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    );
};

export default Layout;
