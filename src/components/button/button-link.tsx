import { Link, GatsbyLinkProps } from "gatsby";
import React, { HTMLProps, PropsWithoutRef } from "react";
import styles from "./button.style";

interface ButtonLinkGatsby extends PropsWithoutRef<GatsbyLinkProps<any>> {
    dark?: boolean;
    filled?: boolean;
    color?: undefined | "purple";
}
interface ButtonLink extends HTMLProps<HTMLAnchorElement> {
    dark?: boolean;
    filled?: boolean;
    color?: undefined | "purple";
}

export const ButtonLink = ({ dark, color, filled, ...props }: ButtonLinkGatsby) => {
    let classes = "";
    if (dark) classes += "dark";
    if (filled) classes += " filled";
    if (color) classes += " " + color;
    return <Link className={classes} {...props} css={styles} />;
};

export const ButtonAnchor = ({ dark, color, filled, ...props }: ButtonLink) => {
    let classes = "";
    if (dark) classes += "dark";
    if (filled) classes += " filled";
    if (color) classes += " " + color;
    return <a className={classes} {...props} css={styles} />;
};
