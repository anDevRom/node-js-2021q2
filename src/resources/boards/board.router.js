const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAllBoardsFormRep();
  res.status(boards ? 200 : 404).json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoardFromRep(req.params.id);
  res.status(board ? 200 : 404).json(board);
});

router.route('/').post(async (req, res) => {
  const newBoard = await boardsService.createBoard(req.body);
  res.status(201).json(newBoard);
});

router.route('/:id').put(async (req, res) => {
  const updatedBoard = await boardsService.updateBoard(req.params.id, req.body);
  res.status(updatedBoard ? 200 : 404).json(updatedBoard);
});

router.route('/:id').delete(async (req, res) => {
  const deletedBoard = await boardsService.removeBoard(req.params.id);
  res.status(deletedBoard ? 200 : 404).json(deletedBoard);
});

module.exports = router;
