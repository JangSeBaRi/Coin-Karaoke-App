export const MoneyRegex = (str) => {
    if (!str) {
        return null;
    }
    if (typeof str != "string") {
        str = String(str);
    }

    return str
        .replace(/[^0-9]/g, "")
        .replace(/(^0+)/, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
