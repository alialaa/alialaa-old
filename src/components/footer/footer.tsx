import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import styles from "./footer.style";
import { Newsletter } from "@components";
import { useTheme } from "@context/theme-context";

const Footer = () => {
    return (
        <footer css={styles}>
            <div className="container">
                <Newsletter />
                <div className="copyright">
                    Copyright &copy; 2020 Ali Alaa. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
export default Footer;
