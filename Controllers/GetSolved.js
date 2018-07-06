module.exports = {
  get: (req, res) => {
      const db = req.app.get("db");
      const id = parseInt(req.user.id);
      db.get_solved_problems({id}).then(item => {
        res.send(item);
      });
    }
}
