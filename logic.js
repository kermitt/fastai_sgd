const INTERCEPT = 30
const SLOPE = 2
const LEARN_RATE = 0.01
// const raw_data = [ 55, 31, 66, 2, 60, 8, 5, 28, 89, 88, 61, 54, 16, 37, 18, 53, 32, 2, 95, 31, 41, 6, 12, 35, 64, 82, 84, 81, 44 ]

function randIntBetween0And100 () {
  return Math.floor(Math.random() * Math.floor(100))
}
function y_given_x (x) {
  // y = a*x+b
  let y = (SLOPE * x) + INTERCEPT
  return y
}

function SGD (a = 14, b = 58, c_intercept = 1, d_slope = 1) {
  // Stocastic Gradient Decent - A 'Tradional' version
  let results = {}
  results.e_y_pred = c_intercept + d_slope * a
  results.f_err = Math.pow(b - results.e_y_pred, 2)
  results.g_errB1 = Math.pow(((c_intercept + LEARN_RATE) + a * d_slope) - b, 2)
  // =(((C4+0.01)+A4*D4)-B4)^2
  results.h_est_de_db = (results.g_errB1 - results.f_err) / LEARN_RATE    // e=(ax+b-y)^2
  // =(((D4+0.01)*A4+C4)-B4)^
  results.i_errA1 = Math.pow(((d_slope + LEARN_RATE) * a + c_intercept) - b, 2)
  // =(I4-F4)/0.01
  results.j_est_de_da = (results.i_errA1 - results.f_err) / LEARN_RATE
  // =2*(E4-B4)
  results.k_de_dB = 2 * (results.e_y_pred - b)
  // k4 * a4
  results.l_de_dA = results.k_de_dB * a

  // D4-L4*$F$

  return pretty(results)
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
  SGD: SGD
}
// https://stratechery.com/2018/amazon-health/
// https://www.reddit.com/r/Futurology/comments/7v70pr/amazon_could_disrupt_us_healthcare_by_converting/
