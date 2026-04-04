function separateTypes(arr) {
    return arr.reduce((res, item) => {
        const type = typeof item;
        if (!res[type]) res[type] = [];
        res[type].push(item);
        return res;
    }, {});
}