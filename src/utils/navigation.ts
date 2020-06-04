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
    return navigation.find(i => i.to === pathname);
}
