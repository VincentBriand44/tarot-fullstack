const AbstractManager = require('./AbstractManager')

class PlayerManager extends AbstractManager {
  constructor() {
    super({ table: 'player' })
  }

  insert(player) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [player.name]
    )
  }

  update(player) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [player.name, player.id]
    )
  }
}

module.exports = PlayerManager
