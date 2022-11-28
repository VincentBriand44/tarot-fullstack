const AbstractManager = require('./AbstractManager')

class PartyplayersManager extends AbstractManager {
  constructor() {
    super({ table: 'partyplayers' })
  }

  view() {
    return this.connection.query(
      `select p.id, p.name from ${this.table} AS pp JOIN player AS p ON p.id = pp.player_id`
    )
  }

  insert(partyplayers) {
    return this.connection.query(
      `insert into ${this.table} (player_id) values (?),(?),(?),(?),(?)`,
      partyplayers.map(partyplayer => [partyplayer.player_id])
    )
  }
}

module.exports = PartyplayersManager
