
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

const SGD = () => {
  const SGD = require('./logic.js').SGD
  SGD()
}
const SGD_epoch = () => {
  const SGD_epoch = require('./logic.js').SGD_epoch
  let actual = SGD_epoch(14, 58, 1, 1)
  let expected = {
    // setup numbers passed into the thing
    'a': 14,
    'b': 58,
    'c_intercept': 1,
    'd_slope': 1,
    // derived numbers
    'e_y_prediction': 15,
    'f_err': 1849,
    'g_errB1': 1848.14,
    'h_est_de_db': -85.99,
    'i_errA1': 1836.98,
    'j_est_de_da': -1202.04,
    'k_de_dB': -86.00,
    'l_de_dA': -1204.00,
    'new_a': 1.12,
    'new_b': 1.01
  }
  let isOk = true
  let results = SGD_epoch()
  for (let key in actual) {
    let a = actual[key].toFixed(2)
    let e = expected[key].toFixed(2)
    let verdict = 'DIFF'

    let pad = key.length >= 7 ? '\t' : '\t\t'
    if (a == e) {
      verdict = 'SAME'
      console.log(isOk + '\tSGD_epoch - pass ' + key + pad + a)
    } else {
      isOk = false
      console.log(isOk + '\tSGD_epoch - fail ' + key + pad + a + ' --! --> ' + e)
    }
  }
  log(isOk, 'SGD_epoch')
}

function pretty_print (obj) {
  console.log(JSON.stringify(obj, null, 6))
}
function log (isOk, msg) {
  let verdict = isOk ? 'PASS' : 'FAIL'
  console.log(verdict + '\t' + msg)
}

function main () {
//  makeRandomInputs()
//  y_times_x_plus_b()
//  SGD_epoch()
  SGD()
}
main()
