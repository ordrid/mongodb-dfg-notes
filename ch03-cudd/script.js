// Inserting documents
db.movies.insertOne({ title: "Stand by Me" })

db.movies.drop()

db.movies.insertMany([
  { title: "Ghostbusters" },
  { title: "E.T." },
  { title: "Blade Runner" },
])

// Document _id must be unique
db.movies.insertMany([
  { _id: 0, title: "Top Gun" },
  { _id: 1, title: "Back to the Future" },
  { _id: 1, title: "Gremlins" },
  { _id: 2, title: "Aliens" },
])

// To check document size in bytes run (in the shell)
Object.bsonsize(doc)

// Removing documents

// delete one deletes the first match
db.movies.deleteOne({ _id: 4 })

// delete multiple documents
db.movies.deleteMany({ year: 1984 })

db.mailing.list.deleteMany({ "opt-out": true })

// Drop

// delete many can remove all documents
db.movies.deleteMany({})

// but to clear an entire collection `drop` is faster
db.movies.drop()
