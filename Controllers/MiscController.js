module.exports = {
    getDudes: (req, res, next) => {
        const db = req.app.get("db")

        db.get_dudes().then(results=> {
            return res.send(results)
        }).catch(err => {
            console.log(' and here is ther err', err)
        })
    },
    addIcon: (req, res, next) => {
        const db = req.app.get("db")
        const id = parseInt(req.user.id)
        const {url} = req.body

        db.addIcon({id, url}).then(results => {
            return res.status(200).send(results)
        })
    },
    getUser: (req, res, next) => {
        const db = req.app.get("db")
        const id = parseInt(req.user.id)

        db.get_user_by_id({id}).then(results=> {
            return res.status(200).send(results)
        })
    }

}