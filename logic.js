const INTERCEPT = 30
const SLOPE = 2
const LEARN = 0.01
// const raw_data = [ 55, 31, 66, 2, 60, 8, 5, 28, 89, 88, 61, 54, 16, 37, 18, 53, 32, 2, 95, 31, 41, 6, 12, 35, 64, 82, 84, 81, 44 ]

function randIntBetween0And100 () {
  return Math.floor(Math.random() * Math.floor(100))
}
function y_given_x (x) {
  // y = a*x+b
  let y = (SLOPE * x) + INTERCEPT
  return y
}

function SGD (a = 14, b = 58, intercept = 1, slope = 1) {
  // Stocastic Gradient Decent - A 'Tradional' version
  let results = {}
  results.y_pred = intercept + slope * a
  results.err = Math.pow(b - results.y_pred, 2)
//  results.errb1 = b

  return results
}

module.exports = {
  randIntBetween0And100: randIntBetween0And100,
  y_given_x: y_given_x,
  SGD: SGD
}
