
const makeRandomInputs = () => {
  const func_randIntBetween0And100 = require('./logic.js').randIntBetween0And100
  const tooHigh = 100
  const tooLow = 0
  const enough = 100
  let count = 0
  let isOk = true
  for (var i = 0; i < 100; i++) {
    let r = func_randIntBetween0And100()
    count++
    if (r > tooHigh || r < tooLow) {
      isOk = false
    }
  }
  if (count != enough) {
    isOk = false
  }
  log(isOk, 'count ' + count + ' for ' + enough)
}

const y_times_x_plus_b = () => {
  const y_given_x = require('./logic.js').y_given_x
  // y = a * x + b
  let x_is = [ 55, 31, 66 ]
  let y_better_be = [140, 92, 162]

  let isOk = true
  x_is.forEach((x, i) => {
    let y = y_given_x(x)
    if (y != y_better_be[i]) {
      isOk = false
    }
  })
  log(isOk, 'y_times_x_plus_b')
}

const sgd = () => {
  const SGD = require('./logic.js').SGD
  let results = SGD(14, 58)

  let isOk = results.y_pred == 15 && results.err == 1849
  log2(isOk, results)
}
// + -------------------- HOUSEWORK FOLLOWS ------------- +

function log2 (isOk, obj) {
  let verdict = isOk ? 'PASS' : 'FAIL'
  console.log(verdict + '\n' + JSON.stringify(obj, null, 6))
}
function log (isOk, msg) {
  let verdict = isOk ? 'PASS' : 'FAIL'
  console.log(verdict + '\t' + msg)
}

function main () {
  makeRandomInputs()
  y_times_x_plus_b()
  sgd()
}
main()
