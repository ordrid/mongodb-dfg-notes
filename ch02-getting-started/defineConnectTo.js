// defineConnectTo.js

/**
 * Connect to a database and set db.
 */
const connectTo = (port, dbname) => {
  if (!port) {
    port = 27017
  }

  if (!dbname) {
    dbname = "test"
  }

  db = connect(`localhost:${port}/${dbname}`)
}
