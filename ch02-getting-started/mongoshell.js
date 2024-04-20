#!/usr/bin/env node

// Using mongo shell as JS interpreter

let x = 200

x / 5

Math.sin(Math.PI / 2)

new Date("20109/1/1")

"Hello, World!".replace("World", "MongoDB")

function factorial(n) {
  if (n <= 1) {
    return 1
  }

  return n * factorial(n - 1)
}
factorial(5)
