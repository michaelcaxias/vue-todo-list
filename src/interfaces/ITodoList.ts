export interface ITodo {
  id: number,
  text: string,
  completed: boolean,
}

export interface ITodoList {
  todos: ITodo[];
  addTodo: (evenr: Event) => void;
  removeTodo: (todo: ITodo) => void;
  toggleTodo: (todo: ITodo) => void;
}
