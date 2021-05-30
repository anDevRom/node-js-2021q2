import { dataBase } from '../../db';
import { IBoard } from './board.interfaces';

export const getAllBoards = (): Array<IBoard> => dataBase.getBoards();

export const createBoard = (board: IBoard): void => dataBase.createBoard(board);

export const setAllBoards = (boards: Array<IBoard>): void => dataBase.setBoards(boards);