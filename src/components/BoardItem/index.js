import { $, onClick } from "../../helpers/index.js";
import TodoList from "../TodoList/index.js";

export default class BoardItem {
  constructor() {
    this.todoList = new TodoList();
    this.state = true;
    this.event();
  }

  templete(item) {
    return `
    <section class="boardWrapper" data-id="${item.id}">
      <div class="boardBox">
        <div class="boardTitleWrapper title-${item.id}" data-id="title-${item.id}">
          <span class="boardDeleteBtn" data-id="${item.id}">&times;</span>
          <h2 class="todoTitle" data-id="${item.id}">${item.title}</h2>
        </div>
        <form class="boardEditWrapper edit-${item.id}" data-id="edit-${item.id}">
          <input type="text" class="boardEditInput" data-id="${item.id}"/>
        </form>
        <ul class="todoWrapper">
          ${this.todoList.templete(item.todos, item.id).join("")}
        </ul>
        <div class="todoAddBtn">+ Add a Card</div>
      </div>
    </section>`;
  }

  event() {
    onClick(document, (e) => {
      if (e.target.classList.contains("todoTitle")) {
        document.querySelectorAll(`.boardTitleWrapper`).forEach((elem) => {
          elem.classList.remove("off");
        });
        document.querySelectorAll(`.boardEditWrapper`).forEach((elem) => {
          elem.classList.remove("on");
        });

        $(`.title-${e.target.dataset.id}`).classList.add("off");
        $(`.edit-${e.target.dataset.id}`).classList.add("on");
        $(`.edit-${e.target.dataset.id} input`).focus();
        this.state = false;
      }
    });
  }
}
