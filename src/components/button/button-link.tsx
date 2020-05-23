import { Link, GatsbyLinkProps } from "gatsby";
import React from "react";
import styles from "./button.style";

interface ButtonLink extends React.PropsWithoutRef<GatsbyLinkProps<any>> {
    color?: string;
}

const ButtonLink = (props: ButtonLink) => {
    return <Link {...props} css={styles} />;
};

export default ButtonLink;
