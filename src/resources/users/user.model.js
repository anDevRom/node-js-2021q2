const uuid = require('uuid').v4;

/** Class representing a user. */
class User {
  /**
   * Create a user
   * @param id {string} - User id
   * @param name {string} - User name
   * @param login {string} - User login
   * @param password {string} - User password
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Return user representation without password
   * @param user {Object} - Object representation of user
   * @return {Object} - Object representation of user without password
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
