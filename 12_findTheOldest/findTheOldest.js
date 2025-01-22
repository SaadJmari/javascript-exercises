const findTheOldest = function (arr) {
    const oldest = arr.reduce((a, b) => {
        let firstPerson = a.yearOfDeath - a.yearOfBirth;
        let secondPerson = b.yearOfDeath - b.yearOfBirth
        if (a.yearOfDeath === undefined) {
            firstPerson = new Date().getFullYear() - a.yearOfBirth;
        }
        if (b.yearOfDeath === undefined) {
            secondPerson = new Date().getFullYear() - b.yearOfBirth;
        }

        if (firstPerson < secondPerson) {
            return b;
        }
        else {
            return a;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
