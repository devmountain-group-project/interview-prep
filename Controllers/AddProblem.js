module.exports = {
  addProblem: (req, res, next) => {
    const db = req.app.get('db')
    const { name, instructions, testUrl, difficulty } = req.body

    db.add_problem([name, instructions, testUrl, difficulty]).then(problems => {
      res.send(problems)
    })
  }
}