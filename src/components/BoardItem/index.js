import TodoList from "../TodoList/index.js";

export default class BoardItem {
  constructor(todoList = new TodoList()) {
    this.todoList = todoList;
  }
  templete(item) {
    return `
    <section class="boardWrapper" data-id="${item.id}">
      <div class="boardBox">
        <span class="boardDeleteBtn" data-id="${item.id}">&times;</span>
        <h2 class="todoTitle" data-id="${item.id}">${item.title}</h2>
        <ul class="todoWrapper">
          ${this.todoList.templete(item.todos, item.id).join("")}
        </ul>
        <div class="todoAddBtn">+ Add a Card</div>
      </div>
    </section>`;
  }
}
