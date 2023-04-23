const pool = require('../utils/pool');

module.exports = class Burger {
  id;
  name;
  season;
  episode;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.season = row.season;
    this.episode = row.episode;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM burgers;');
    return rows.map((row) => new Burger(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM burgers WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Burger(rows[0]);
  }
};
