function trickyDoubles(n) {
    const str = String(n);

    if (str.length % 2 !== 0) {
        return n * 2;
    }

    const middle = str.length / 2;

    const firstHalf = str.slice(0, middle);
    const secondHalf = str.slice(middle);

    if (firstHalf === secondHalf) {
        return n;
    }

    return n * 2;
}