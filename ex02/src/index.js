// Only change code below this line
class Book {
    constructor (title) {
        this._title = title;
    }
    // getter
    get title () {
        return this._title;
    }
    // setter
    set title (newName) {
        this._title = newName;
    }
}


// Only change code above this line
const littlePrince = new Book ("The Little Price"); // Change this line
console.log(littlePrince.title); // The Little Prince
littlePrince.title = "Le Petit Price"; // Change this line
console.log(littlePrince.title); // Le Petit Prince

module.exports = Book;