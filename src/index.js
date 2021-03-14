module.exports = function toReadable (number) {
    const arr1= [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const arr10 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ]

    if (number == 0) {
        return "zero";
    };
    if (number < 20) {
        return arr1[number];
    };  
    if (number < 100) {
        return (arr10[Math.floor(number / 10)] + (number % 10 !== 0 ? " " : "")  + arr1[number % 10])
    }
    if (number >= 100) {
        if (number % 100 == 0) {
            return (arr1[Math.floor(number / 100)] + " hundred")
        } else {
            return (arr1[Math.floor(number / 100)] + " hundred" + " " + toReadable(number % 100))
        }
    }
}
