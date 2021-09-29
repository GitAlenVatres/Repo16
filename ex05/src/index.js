// Only change code below this line 
class Microsoft {
 constructor (name) {
        this._name = name;
    }
    // getter
    get name () {
        return this._name;
    }
    // setter
    set name (newName) {
        this._name = newName;
    }
}
class Facebook extends Microsoft {
    constructor (name, age) {
        super (name, age);
    }
 studentAge () {
  var Say = `${this.name} is {this.age}`;
 return Say;
 }

}
// Only change code above this line 

module.exports = {
    Microsoft,
    Facebook
}