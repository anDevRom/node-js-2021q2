import uuid = require('uuid');
import { IBoard } from './board.interfaces';
import { IColumns } from '../columns/columns.interfaces';

export class Board implements IBoard{
  id: string;
  title: string;
  columns: Array<IColumns>

  constructor({
                id = uuid.v4(),
                title = 'title',
                columns = [{id: 'columnid', title: 'columntitle', order: 'columnorder'}]
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}