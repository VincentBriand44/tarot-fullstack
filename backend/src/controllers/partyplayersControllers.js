const models = require('../models')

const browse = (req, res) => {
  models.partyplayers
    .view()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
}

const add = (req, res) => {
  const partyplayer = req.body

  // TODO validations (length, format...)

  models.partyplayers
    .insert(partyplayer)
    .then(([result]) => {
      res.location(`/party/players/${result.insertId}`).sendStatus(201)
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
}

const destroyAll = (req, res) => {
  models.partyplayers
    .deleteAll()
    .then(() => {
      res.sendStatus(204)
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  browse,
  add,
  destroyAll
}
