export type NavigationItemType = {
    title: string;
    pageTitle?: string;
    to: string;
};

export const navigation: NavigationItemType[] = [
    {
        title: "Home",
        to: "/"
    },
    {
        title: "Blog",
        pageTitle: "The Blog",
        to: "/blog"
    },
    {
        title: "Courses",
        to: "/courses"
    },
    {
        title: "About",
        to: "/about"
    },
    {
        title: "Contact",
        to: "/contact"
    },
    {
        title: "Uses",
        to: "/uses"
    }
];

export function getPageInfo(pathname: string) {
    if (pathname === "/") {
        return navigation.find(i => i.to === pathname);
    }
    return navigation.find(i => i.to !== "/" && pathname.includes(i.to));
}
