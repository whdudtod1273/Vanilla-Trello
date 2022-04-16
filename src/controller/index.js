import BoardList from "../components/BoardList/index.js";
import { $, createId, onClick } from "../helpers/index.js";
export default class Controller {
  constructor(model) {
    this.model = model;
    this.BoardList = new BoardList();

    this.addBarodBtn = $(".addBoardBtn");
    this.boardContainer = $(".boardContainer");
    this.deleteBoardBtn = $(".boardDeleteBtn");
    this.deletetodoBtn = $(".todoDeleteBtn");
    this.todoTitle = $(".todoTitle");
    this.todoBox = $(".todoBox");

    this.addBoard();
    this.addTodo();
    this.deleteBoard();
    this.deleteTodo();
    this.editBoardData();
    this.editTodoData();
    this.render();
  }

  render() {
    this.boardContainer.innerHTML = this.BoardList.templete(this.model.getData());
  }

  addBoard() {
    onClick(this.addBarodBtn, (e) => {
      const title = prompt("추가할 Board를 입력하세요.", "내용");
      if (title.length > 20) {
        alert("Board 글자수가 20자를 넘어가면 안됩니다.");
        return;
      }
      if (title) {
        this.model.setBoardData({ id: createId(), title, todos: [] }, "boards");
      }
      this.render();
    });
  }

  deleteBoard() {
    onClick(document, (e) => {
      if (e.target.classList.contains("boardDeleteBtn")) {
        this.model.deleteBoardData(e.target.dataset.id);
      }
      this.render();
    });
  }

  editBoardData() {
    onClick(document, (e) => {
      if (e.target.classList.contains("todoTitle")) {
        const text = e.target.innerText;
        const title = prompt("수정할 내용을 입력해주세요.", `${text}`);
        const id = e.target.dataset.id;
        if (title) {
          this.model.editBoardData(title, id);
        }
      }
      this.render();
    });
  }

  addTodo() {
    onClick(document, (e) => {
      if (e.target.classList.contains("todoAddBtn")) {
        const content = prompt("추가할 Todo를 입력해주세요.", "내용");
        if (content) {
          const todo = { id: createId(this.nowDate), content };
          this.model.setTodoData(todo, e.target.parentNode.parentNode.dataset.id);
          this.render();
        }
      }
    });
  }

  deleteTodo() {
    onClick(document, (e) => {
      if (e.target.classList.contains("todoDeleteBtn")) {
        const boardId = e.target.dataset.boardId;
        const id = e.target.dataset.id;
        this.model.deleteTodoData(boardId, id);
      }
      this.render();
    });
  }

  editTodoData() {
    onClick(document, (e) => {
      if (e.target.classList.contains("todoContent")) {
        const text = e.target.innerText;
        const content = prompt("수정할 내용을 입력해주세요.", `${text}`);
        const boardId = e.target.dataset.boardId;
        const id = e.target.dataset.id;

        if (content) {
          this.model.editTodoData(content, boardId, id);
        }
      }
      this.render();
    });
  }
}
