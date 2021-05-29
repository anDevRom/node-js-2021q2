const uuid = require('uuid').v4;

/** Class representing a board. */
class Board {
  /**
   * Create a board
   * @param id {string} - Id of board
   * @param title {string} - Title of board
   * @param columns {Array} - Columns for board
   */
  constructor({
                id = uuid(),
                title,
                columns
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;