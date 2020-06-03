import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Header, Footer } from "@components";
import { Global, css } from "@emotion/core";
import Helmet from "react-helmet";
import { useTheme } from "@context/theme-context";
import "focus-visible";
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
    const { dark, loaded } = useTheme();
    return (
        <>
            <Global
                styles={css`
                    ${global}
                `}
            />
            {loaded && (
                <Helmet
                    htmlAttributes={{
                        "data-dark": dark ? "true" : "false"
                    }}
                />
            )}
            <a className="skip-link" href="#main">
                Skip to Content
            </a>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div id="main">
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
