const models = require('../models')

const browseStart = (req, res) => {
  models.party
    .viewStart()
    .then(([rows]) => {
      res.send({
        id: rows[0].id,
        dealer: rows[0].dealer,
        players: rows.map(row => row.players)
      })
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  browseStart
}
