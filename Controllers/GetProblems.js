module.exports = {
  get: (req, res) => {
      const db = req.app.get("db");
      const fakeItem = null

      db.get_problems(fakeItem).then(item => {
        res.send(item);
      });
    }
}
