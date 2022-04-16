import TodoItem from "../TodoItem/index.js";

export default class TodoList {
  constructor(todoItem = new TodoItem()) {
    this.todoItem = todoItem;
  }

  templete(data = [], boardId) {
    return data.map((item) => this.todoItem.templete(item, boardId));
  }
}
