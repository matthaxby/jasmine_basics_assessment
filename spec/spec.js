var myCode = require('./../grader.js')

var test = [95, 85, 66, 56, 95, 78]

describe('letter grader', function () {
  it('does it work', function () {
    expect(myCode.letterGrader([95, 85, 72])).toEqual(['A', 'B', 'C'])
    expect(myCode.letterGrader(test)).toEqual(['A', 'B', 'D', 'F', 'A', 'C'])
  })
})

describe('average', function () {
  it('does it work', function () {
    expect(myCode.averageScore([90, 80, 70])).toEqual(80)
  })
})
