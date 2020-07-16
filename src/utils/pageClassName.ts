const pageClassName = (pathname: string) => {
    const pathArr = pathname.replace(/^\/?|\/?$/, "").split("/");
    let classes = pathArr.join(" ");
    if (pathArr.length === 1 && pathArr[0] === "") {
        classes += " home";
    }
    if (pathArr.length > 1 && pathArr[0] === "courses") {
        classes += " single-course";
    }
    if (pathArr.length > 1 && pathArr[0] === "blog") {
        classes += " single-post";
    }
    return classes;
};

export default pageClassName;
