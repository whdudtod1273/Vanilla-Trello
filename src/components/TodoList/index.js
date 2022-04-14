import TodoItem from "../TodoItem/index.js";

export default class TodoList {
  constructor(todoItem = new TodoItem()) {
    this.todoItem = todoItem;
  }

  templete(data = []) {
    return data.map((item, index) => this.todoItem.templete(item));
  }
}
