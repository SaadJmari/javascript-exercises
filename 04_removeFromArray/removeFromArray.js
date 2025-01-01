const removeFromArray = function (list, num, num2, num3, num4) {
    let newList = [];
    for (i = 0; i < list.length; i++) {
        if (list[i] !== num && list[i] !== num2 && list[i] !== num3 && list[i] !== num4) {
            newList.push(list[i])
        }
        else {
            continue;
        }
    }
    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
