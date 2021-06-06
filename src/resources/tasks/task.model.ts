import uuid = require('uuid');
import { ITask } from './task.interfaces';

export class Task implements ITask{
  id: string;
  title: string;
  order: string;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;

  constructor({
                id = uuid.v4(),
                title = 'title',
                order = 'order',
                description = 'description',
                userId = 'userId',
                boardId = 'boardId',
                columnId = 'columnId'
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}