import { getAllBoards, createBoard, setAllBoards } from './board.memory.repositiry';
import { getAllTasks, setAllTasks } from '../tasks/task.memory.repository';
import { Board } from './board.model';
import { IBoard, IRequestBoard } from './board.interfaces';

export const getAllBoardsFormRep = (): Array<IBoard> => getAllBoards();

export const getBoardFromRep = (id: string): IBoard | undefined => {
  const boards = getAllBoards();
  return boards.find(board => board.id === id);
};

export const createBoardRep = (params: IRequestBoard): IBoard => {
  const newBoardParams = {
    id: params.id,
    title: params.title,
    columns: params.columns
  };
  const newBoard = new Board(newBoardParams);

  createBoard(newBoard);

  return newBoard;
};

export const updateBoard = (id: string, params: IBoard): IBoard => {
  const boards = getAllBoards();
  const boardForUpdate = boards.find(board => board.id === id);

  return Object.assign(boardForUpdate, params);
};

export const removeBoard = (id: string): IBoard | undefined => {
  const boards = getAllBoards();
  const boardForDelete = boards.find(board => board.id === id);

  if (boardForDelete) {
    const tasks = getAllTasks();

    const newTasks = tasks.filter(task => task.boardId !== id);
    setAllTasks(newTasks);

    const newBoards = boards.filter(board => board.id !== id);

    setAllBoards(newBoards);
  }

  return boardForDelete;
};
