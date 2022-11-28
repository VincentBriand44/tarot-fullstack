const express = require('express')

const router = express.Router()

const itemControllers = require('./controllers/itemControllers')
const playerControllers = require('./controllers/playerControllers')
const partyControllers = require('./controllers/partyControllers')
const partyplayersControllers = require('./controllers/partyplayersControllers')

router.get('/items', itemControllers.browse)
router.get('/items/:id', itemControllers.read)
router.put('/items/:id', itemControllers.edit)
router.post('/items', itemControllers.add)
router.delete('/items/:id', itemControllers.destroy)

router.get('/players', playerControllers.browse)
router.get('/players/:id', playerControllers.read)
router.put('/players/:id', playerControllers.edit)
router.post('/players', playerControllers.add)
router.delete('/players/:id', playerControllers.destroy)

router.get('/party/start', partyControllers.browseStart)

router.get('/party/players', partyplayersControllers.browse)
router.post('/party/players', partyplayersControllers.add)
router.delete('/party/players', partyplayersControllers.destroyAll)

module.exports = router
