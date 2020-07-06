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

function formatTagName(tag: string) {
    const arr = tag.split("-");
    const capital = arr.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    const capitalString = capital.join(" ");

    return capitalString;
}

export function getPageInfo(pathname: string) {
    if (pathname === "/") {
        return navigation.find(i => i.to === pathname);
    }
    if (pathname.includes("/tags")) {
        return {
            title: `#${pathname.split("/")[2] ? formatTagName(pathname.split("/")[2]) : ""}`,
            to: `/tags/${pathname.split("/")[2] || ""}`
        };
    }
    return navigation.find(i => i.to !== "/" && pathname.includes(i.to));
}
