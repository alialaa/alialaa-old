import { Link, GatsbyLinkProps } from "gatsby";
import React, { HTMLProps, PropsWithoutRef } from "react";
import styles from "./button.style";

interface ButtonLinkGatsby extends PropsWithoutRef<GatsbyLinkProps<any>> {
    dark?: boolean;
}
interface ButtonLink extends React.ComponentProps<"a"> {
    dark?: boolean;
}
interface Button extends React.ComponentProps<"button"> {
    dark?: boolean;
}

export const ButtonLink = ({ dark, ...props }: ButtonLinkGatsby) => {
    let classes = "";
    if (dark) classes += "dark";
    return <Link className={classes} {...props} css={styles} />;
};

export const ButtonAnchor = ({ dark, ...props }: ButtonLink) => {
    let classes = "";
    if (dark) classes += "dark";
    return <a className={classes} {...props} css={styles} />;
};

export const Button = ({ dark, ...props }: Button) => {
    let classes = "";
    if (dark) classes += "dark";
    return <button className={classes} {...props} css={styles} />;
};
