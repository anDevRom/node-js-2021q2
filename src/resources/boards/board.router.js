const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.status(boards ? 200 : 404)
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const newBoard = await boardsService.create(req.body)
  res.status(201)
  res.json(newBoard)
})

module.exports = router;
