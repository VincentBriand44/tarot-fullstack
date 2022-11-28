const AbstractManager = require('./AbstractManager')

class PartyManager extends AbstractManager {
  constructor() {
    super({ table: 'party' })
  }

  viewStart() {
    return this.connection.query(
      `SELECT p.id, p.dealer, pp.player_id AS players FROM ${this.table} AS p JOIN partyplayers AS pp ON p.id = pp.party_id WHERE p.status = 1`
    )
  }
}

module.exports = PartyManager
