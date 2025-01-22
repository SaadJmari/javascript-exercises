const getTheTitles = function (books) {
    const bookTitles = books.map(item => {
        return item.title;
    }
    )
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
