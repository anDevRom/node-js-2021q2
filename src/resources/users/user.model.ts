import uuid = require('uuid');

export interface IUser {
  id: string,
  name: string,
  login: string,
  password?: string
}

export class User implements IUser{
  id: string;
  name: string;
  login: string;
  password?: string;

  static toResponse(user: IUser): IUser {
    const { id, name, login } = user;
    return { id, name, login };
  }

  constructor({
    id = uuid.v4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }
}

