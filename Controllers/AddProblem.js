module.exports = {
  addProblem: (req, res, next) => {
    const db = req.app.get('db')
    const { name, instructions } = req.body

    db.add_problem([name, instructions]).then(problems => {
      res.send(problems)
    })
  }
}