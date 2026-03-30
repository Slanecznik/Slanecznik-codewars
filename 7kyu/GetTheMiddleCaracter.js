function getMiddle(str) {
    const length = str.length;
    const middle = length / 2;

    return length % 2 === 0
        ? str.slice(middle - 1, middle + 1)
        : str.slice(Math.floor(middle), Math.floor(middle) + 1);
}