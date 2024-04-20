// .mongorc.js
let compliment = ["attractive", "intelligent", "like Batman"]
let index = Math.floor(Math.random() * 3)

print(`Hello, you're looking particularly ${compliment[index]} today!`)

// use mongorc to set global variables
const no = () => {
  print("Not on my watch.");
}

// Prevent dropping databases
db.dropDatabase = DB.prototype.dropDatabase = no;

// Porvent dropping collections
DBCollection.prototype.drop = no;

// Prevent dropping an index
DBCollection.prototype.dropIndex = no;

// Prevent dropping indexes
DBCollection.prototype.dropIndexes = no;
