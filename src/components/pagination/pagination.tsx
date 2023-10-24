import React from "react";
import styles from "./pagination.style";
import { useTheme } from "@context/theme-context";
import { Link } from "gatsby";
// import Img from "gatsby-image";

type PaginationProps = {
    numPages: number;
    currentPage: number;
    tag?: string;
};

const Pagination = ({ numPages, currentPage, tag }: PaginationProps) => {
    if (numPages <= 1) return null;
    const path = tag ? `/tags/${tag}` : `/blog`;
    return (
        <nav role="navigation" aria-label="Posts Pagination">
            <ul css={styles}>
                {currentPage !== 1 && (
                    <li className={currentPage === 1 ? "disabled" : ""}>
                        <Link
                            to={currentPage === 2 ? path : `${path}/page/${currentPage - 1}`}
                            aria-disabled={currentPage === 1}
                        >
                            Previous <div className="visually-hidden">Page</div>
                        </Link>
                    </li>
                )}
                {Array(numPages)
                    .fill(null)
                    .map((v, i) => {
                        return (
                            <li key={`page-${i}`}>
                                <Link
                                    {...(i + 1 === currentPage ? { "aria-current": "page" } : {})}
                                    to={i === 0 ? `${path}` : `${path}/page/${i + 1}`}
                                >
                                    <div className="visually-hidden">Page</div> {i + 1}
                                </Link>
                            </li>
                        );
                    })}
                {currentPage !== numPages && (
                    <li className={currentPage === numPages ? "disabled" : ""}>
                        <Link
                            to={`${path}/page/${currentPage + 1}`}
                            aria-disabled={currentPage === numPages}
                        >
                            Next <div className="visually-hidden">Page</div>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};
export default Pagination;
