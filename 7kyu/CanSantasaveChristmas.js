function determineTime(arr) {
    const total = arr.reduce((sum, time) => {
        const [hours, minutes, seconds] = time.split(":").map(Number);
        return sum + hours * 3600 + minutes * 60 + seconds;
    }, 0);

    return total <= 24 * 60 * 60;
}