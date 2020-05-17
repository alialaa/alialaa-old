import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Header, Space } from "@components";
import { Global, css } from "@emotion/core";
import { useLocation } from "@reach/router";

import "normalize.css";
import "./global-styles/font-visby.css";
import "./global-styles/font-dank.css";
import global from "./global-styles";

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
    const { pathname } = useLocation();
    return (
        <>
            <Global
                styles={css`
                    ${global}
                `}
            />
            <a className="skip-link" href="#main">
                Skip to Content
            </a>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div id="main">
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
