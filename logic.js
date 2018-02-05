const INTERCEPT = 30
const SLOPE = 2
const LEARN_RATE = 0.0001

// const raw_data = [ 55, 31, 66, 2, 60, 8, 5, 28, 89, 88, 61, 54, 16, 37, 18, 53, 32, 2, 95, 31, 41, 6, 12, 35, 64, 82, 84, 81, 44 ]

function randIntBetween0And100 () {
  return Math.floor(Math.random() * Math.floor(100))
}
function y_given_x (x) {
  // y = a*x+b
  let y = (SLOPE * x) + INTERCEPT
  return y
}
function SGD () {
  let limit = 5
  let loop = 0

  let a = 14
  let b = 58
  let intercept = 1
  let slope = 1
  // Sabrina's comment.
  //  my spponge is  A W0NDERful plqlace tp he 26  1234567890-fv c%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  for (let i = 0; i < limit; i++) {
    let results = SGD_epoch(a, b, intercept, slope)
    a = results.new_a
    b = results.new_b
    console.log(i + ' a: ' + a + '  b: ' + b)
  }
}

function SGD_epoch (a = 14, b = 58, c_intercept = 1, d_slope = 1) {
  // Stocastic Gradient Decent - A 'Tradional' version
  let results = {}
  results.a = a
  results.b = b
  results.c_intercept = c_intercept
  results.d_slope = d_slope
  // =C4+D4*A4
  results.e_y_prediction = c_intercept + d_slope * a
  // =(B4-E4)^2
  results.f_err = Math.pow(b - results.e_y_prediction, 2)
   // =(((C4+0.01)+A4*D4)-B4)^2
  results.g_errB1 = Math.pow(((c_intercept + 0.01) + a * d_slope) - b, 2)
  // =(((C4+0.01)+A4*D4)-B4)^2
  results.h_est_de_db = (results.g_errB1 - results.f_err) / 0.01    // e=(ax+b-y)^2
  // =(((D4+0.01)*A4+C4)-B4)^
  results.i_errA1 = Math.pow(((d_slope + 0.01) * a + c_intercept) - b, 2)
  // =(I4-F4)/0.01
  results.j_est_de_da = (results.i_errA1 - results.f_err) / 0.01
  // =2*(E4-B4)
  results.k_de_dB = 2 * (results.e_y_prediction - b)
  // k4 * a4
  results.l_de_dA = results.k_de_dB * a
  // D4-L4*$F$
  results.new_a = d_slope - results.l_de_dA * LEARN_RATE
    // C4-K4*$F$
  results.new_b = c_intercept - results.k_de_dB * LEARN_RATE
  return results
}

function pretty (results) {
  for (let k in results) {
    results[k] = results[k].toFixed(2)
  }
  return results
}

module.exports = {
  randIntBetween0And100: randIntBetween0And100,
  y_given_x: y_given_x,
  SGD_epoch: SGD_epoch,
  SGD: SGD
}
// https://stratechery.com/2018/amazon-health/
// https://www.reddit.com/r/Futurology/comments/7v70pr/amazon_could_disrupt_us_healthcare_by_converting/
