var grades = {
  90: 'A',
  80: 'B',
  70: 'C',
  60: 'D'
}

var letterGrader = function (arr) {
  arr.forEach(function (val, index) {
    if (arr[index] < 60) {
      arr[index] = 'F'
    } else {
      arr[index] = grades[val - (val % 10)]
    }
  })
  return arr
}

var averageScore = function (arr) {
  var average
  average = arr.reduce(function (a, b) {
    return a + b
  }) / arr.length
  return average
}

var medianScore = function (arr) {
  var median
  arr = arr.sort()
  var length = arr.length
  if (arr.length % 2 === 0) {
    median = (arr[length / 2 - 1] + arr[length / 2]) / 2
  } else {
    median = arr[Math.floor(length / 2)]
  }
  return median
}

var mode = function (arr) {
  var result = {}
  var greatest = 0
  var theMode = 0
  arr.forEach(function (val) {
    if (result[val] === undefined) {
      result[val] = 1
    } else {
      result[val]++
      if (greatest < result[val]) {
        greatest = result[val]
        theMode = val
      }
    }
  })
  return theMode
}

module.exports = {
  mode: mode,
  letterGrader: letterGrader,
  medianScore: medianScore,
  averageScore: averageScore
}
