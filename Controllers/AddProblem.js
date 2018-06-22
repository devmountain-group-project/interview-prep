module.exports = {
  addProblem: (req, res, next) => {
    const db = req.app.get('db')
    const { name, instructions, testUrl } = req.body

    db.add_problem([name, instructions, testUrl]).then(problems => {
      res.send(problems)
    })
  }
}