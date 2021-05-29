const uuid = require('uuid').v4;

/** Class representing a task. */
class Task {
  /**
   * Create a task
   * @param id {string} - Id of task
   * @param title {string} - Title of task
   * @param order {string} - Order of task
   * @param description {string} - Description of task
   * @param userId {string} - Id of user
   * @param boardId {string} - Id of board
   * @param columnId {string} - Id of column
   */
  constructor({
                id = uuid(),
                title,
                order,
                description,
                userId,
                boardId,
                columnId
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;