//Max width of each breakpoint in px
const breakpoints = {
    small: 640,
    mediumSmall: 890,
    medium: 1024,
    large: 1200,
    xlarge: 1440
};
const baseFontSize = 16;
type breakpointType = keyof typeof breakpoints;
const isFirst = (bp: breakpointType): boolean => {
    return Object.keys(breakpoints).indexOf(bp) === 0;
};
const isLast = (bp: breakpointType): boolean => {
    const arr = Object.keys(breakpoints);
    return arr.indexOf(bp) === arr.length - 1;
};
const pxToEM = (value: number) => {
    return value / baseFontSize;
};
const getBPSize = (bp: breakpointType, unit: "px" | "em" | "rem" = "px") => {
    return unit === "px" ? breakpoints[bp] : breakpoints[bp] / baseFontSize;
};
const lessThan = (bp: breakpointType): string => {
    return `@media screen and (max-width: ${pxToEM(breakpoints[bp]) - 0.0625}em)`;
};
const largerThan = (bp: breakpointType): string => {
    return `@media screen and (min-width: ${pxToEM(breakpoints[bp])}em)`;
};
const between = (minBP: breakpointType, maxBP: breakpointType): string => {
    if (breakpoints[minBP] >= breakpoints[maxBP]) {
        throw new Error("Invalid media query range.");
    }
    return `@media screen and (min-width: ${pxToEM(breakpoints[minBP])}em) and (max-width: ${pxToEM(
        breakpoints[maxBP]
    ) - 0.0625}em)`;
};
const only = (bp: breakpointType): string => {
    if (isFirst(bp)) {
        return lessThan(bp);
    }
    if (isLast(bp)) {
        return largerThan(bp);
    }
    const arr = Object.keys(breakpoints);
    return between(arr[arr.indexOf(bp) - 1] as breakpointType, bp);
};

export default { breakpoints, lessThan, largerThan, between, only, getBPSize, pxToEM };
