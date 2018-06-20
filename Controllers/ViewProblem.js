module.exports = {
  get: (req, res) => {
      const db = req.app.get("db");
      const problem_id = req.params.problem_id;
      console.log(typeof(problem_id));
      console.log(problem_id);
      db.get_problem_by_id({problem_id}).then(item => {
        res.send(item);
      });
    }
}
