const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
}

/**
 * Get sum of student marks.
 * @param {object} scores - object with students where key is the student's name and the value is the student's mark
 * @returns {number} sum of marks
 */
const getScore = (scores) => Object.keys(scores).reduce((acc, name) => acc + scores[name], 0)

console.log(getScore(scores))
