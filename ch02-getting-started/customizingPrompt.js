const prompt = () => {
  return `${new Date()} >`
}

const prompt2 = () => {
  if (typeof db == "undefined") {
    return "(nodb)> "
  }

  try {
    db.runCommand({ getLastError: 1 })
  } catch (e) {
    print(e)
  }

  return `${db}> `
}
