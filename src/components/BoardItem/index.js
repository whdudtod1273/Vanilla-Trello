import TodoList from "../TodoList/index.js";

export default class BoardItem {
  constructor(todoList = new TodoList()) {
    this.todoList = todoList;
  }
  templete(item) {
    return `
    <section class="boardWrapper" data-id="${item.id}">
      <div class="boardBox">
        <h2 class="todoTitle">${item.title}</h2>
        <ul class="todoWrapper">
          ${this.todoList.templete(item.todos).join("")}
        </ul>
        <div class="todoAddBtn">+ Add a Card</div>
      </div>
    </section>`;
  }
}
