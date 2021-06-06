export interface ITask {
  id: string | undefined,
  title: string | undefined,
  order: string | undefined,
  description: string | undefined,
  userId: string | null | undefined,
  boardId: string | undefined,
  columnId: string | undefined
}

export interface IRequestTask {
  id: string,
  title: string,
  order: string,
  description: string,
  userId: string,
  boardId: string,
  columnId: string
}