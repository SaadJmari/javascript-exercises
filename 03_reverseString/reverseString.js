const reverseString = function (text) {
    let string = ""
    for (i = text.length; i >= 0; i--) {
        string += text.charAt(i - 1)
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
