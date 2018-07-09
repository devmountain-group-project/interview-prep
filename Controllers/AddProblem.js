module.exports = {
  addProblem: (req, res, next) => {
    const db = req.app.get('db')
    const { name, instructions, testUrl, difficulty } = req.body

    db.add_problem([name, instructions, testUrl, difficulty]).then(problems => {
      res.send(problems)
    })
  },
  completeProblem: (req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.user
    const { difficulty, solution , problem_id } = req.body

    db.complete_problem({id, problem_id, difficulty, solution}).then(res=>{
      console.log(res)
      // res.send(res)
    }).catch(err => {
      console.log('hitting the error', err)
      res.status(500).send(err)})
  }
}