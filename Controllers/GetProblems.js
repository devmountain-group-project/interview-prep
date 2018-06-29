module.exports = {
  get: (req, res) => {
      const db = req.app.get("db");
      // const fakeItem = null;
      db.get_problems().then(item => {
        res.send(item);
      });
    }
}
