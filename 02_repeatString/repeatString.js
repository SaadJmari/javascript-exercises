const repeatString = function (word, time) {
    if (time < 0) {
        return "ERROR";
    }
    let text = "";
    for (i = 0; i < time; i++) {
        text += word;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
