import { Link, GatsbyLinkProps } from "gatsby";
import React, { HTMLProps, PropsWithoutRef } from "react";
import styles from "./button.style";

interface ButtonLinkGatsby extends PropsWithoutRef<GatsbyLinkProps<any>> {
    dark?: boolean;
}
interface ButtonLink extends HTMLProps<HTMLAnchorElement> {
    dark?: boolean;
}

export const ButtonLink = ({ dark, ...props }: ButtonLinkGatsby) => {
    return <Link className={dark ? "dark" : "dark"} {...props} css={styles} />;
};

export const ButtonAnchor = ({ dark, ...props }: ButtonLink) => {
    return <a className={dark ? "dark" : "dark"} {...props} css={styles} />;
};
