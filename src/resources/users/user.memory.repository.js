const db = require('../../db');

const getAll = () => db.getUsers();

const add = (user) => db.addUser(user);

const set = (users) => db.setUsers(users);

module.exports = { getAll, add, set };
