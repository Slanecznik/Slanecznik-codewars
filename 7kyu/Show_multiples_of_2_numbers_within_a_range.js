// Given 3 positive parameters a, b, limit, return all positive numbers that are a multiple of both a and b up to and including limit.
//
//     Examples
// 1, 5, 15 --> [5, 10, 15]
// 3, 5, 15 --> [15]
// 3, 5, 40 --> [15, 30]
// 2, 4, 40 --> [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]

function multiples(a, b, limit) {
    return Array.from(
        { length: limit },
        (_, i) => i + 1
    ).filter(number => number % a === 0 && number % b === 0);
}