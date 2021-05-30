import { Response, Router } from 'express';
import { getAllBoardsFormRep, getBoardFromRep, createBoardRep, updateBoard, removeBoard } from './board.service';

const router = Router();

router.route('/').get(async (res: Response) => {
  const boards = await getAllBoardsFormRep();
  res.status(boards ? 200 : 404).json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await getBoardFromRep(req.params.id);
  res.status(board ? 200 : 404).json(board);
});

router.route('/').post(async (req, res) => {
  const newBoard = await createBoardRep(req.body);
  res.status(201).json(newBoard);
});

router.route('/:id').put(async (req, res) => {
  const updatedBoard = await updateBoard(req.params.id, req.body);
  res.status(updatedBoard ? 200 : 404).json(updatedBoard);
});

router.route('/:id').delete(async (req, res) => {
  const deletedBoard = await removeBoard(req.params.id);
  res.status(deletedBoard ? 200 : 404).json(deletedBoard);
});

module.exports = router;
