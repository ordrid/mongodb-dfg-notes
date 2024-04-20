// Null
let nulls = {
  x: null,
}

// Boolean
let bools = {
  x: true,
}

// Number
let nums = {
  w: 3.14,
  x: 3,
  y: NumberInt("3"),
  z: NumberLong("3"),
}

// String
let strings = {
  x: "foobar",
}

// Date
let date = {
  x: new Date(),
}

// Regular expressions
let regex = {
  x: /foobar/,
}

// Array
let array = {
  x: ["a", "b", "c"],
}

// Embedded documents
let embeddedDocs = {
  x: {
    foo: "bar",
  },
}

// ObjectId
let objId = { x: ObjectId() }
