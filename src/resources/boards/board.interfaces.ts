import { IColumns } from '../columns/columns.interfaces';

export interface IBoard {
  id: string,
  title: string,
  columns: Array<IColumns>
}

export interface IRequestBoard {
  id: string,
  title: string,
  columns: Array<IColumns>
}