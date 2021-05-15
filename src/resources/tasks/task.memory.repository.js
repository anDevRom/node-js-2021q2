const db = require('../../db')

const getAll = () => db.getTasks()
const setAll = (newTasks) => db.setTasks(newTasks)

module.exports = { getAll, setAll }