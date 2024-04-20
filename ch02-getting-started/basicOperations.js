// Basic operations with the shell

// Create
let movie = {
  title: "Star Wars: Episode IV - A New Hope",
  director: "George Lucas",
  year: 1977,
}

db.movies.insertOne(movie)

// Read
db.movies.findOne()

// Update
db.movies.updateOne(
  { title: "Star Wars: Episode IV - A New Hope" },
  { $set: { reviews: [] } },
)

// Delete
db.movies.deleteOne({ title: "Star Wars: Episode IV - A New Hope" })
