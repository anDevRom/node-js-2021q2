const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.status(boards ? 200 : 404)
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req.params.id)
  res.status(board ? 200 : 404)
  res.json(board)
})

router.route('/').post(async (req, res) => {
  const newBoard = await boardsService.create(req.body)
  res.status(201)
  res.json(newBoard)
})

router.route('/:id').put(async (req, res) => {
  const updatedBoard = await boardsService.update(req.params.id, req.body)
  res.status(updatedBoard ? 200 : 404)
  res.json(updatedBoard)
})

router.route('/:id').delete(async (req, res) => {
  const deletedBoard = await boardsService.remove(req.params.id)
  res.status(deletedBoard ? 200 : 404)
  res.json(deletedBoard)
})

module.exports = router;
