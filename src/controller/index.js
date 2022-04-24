import BoardList from "../components/BoardList/index.js";
import { $, createId, onClick, onSubmit } from "../helpers/index.js";
export default class Controller {
  constructor(model) {
    this.model = model;
    this.BoardList = new BoardList();
    this.boardContainer = $(".boardContainer");

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
    onClick($(".addBoardBtn"), (e) => {
      e.preventDefault();
      e.target.classList.remove("on");
      $(".addBoardInputWrapper").classList.add("on");
      $(".addBoardInputWrapper input").focus();
      // const title = prompt("추가할 Board를 입력하세요.", "내용");
      // if (title.length > 20) {
      //   alert("Board 글자수가 20자를 넘어가면 안됩니다.");
      //   return;
      // }
      // if (title) {
      //   this.model.setBoardData({ id: createId(), title, todos: [] }, "boards");
      // }
      this.render();
    });
    onClick($(".addBoardControls"), (e) => {
      e.preventDefault();

      const inputClose = () => {
        $(".addBoardInputWrapper").classList.remove("on");
        $(".addBoardInputWrapper input").value = "";
        $(".addBoardBtn").classList.add("on");
        this.render();
      };

      if (e.target.classList.contains("closeBtn")) {
        inputClose();
      } else if (e.target.classList.contains("addBtn")) {
        const title = $(".addBoardInputWrapper input").value;
        this.model.setBoardData({ id: createId(), title, todos: [] }, "boards");
        inputClose();
      }
    });
  }

  deleteBoard() {
    onClick(document, (e) => {
      if (e.target.classList.contains("boardDeleteBtn")) {
        this.model.deleteBoardData(e.target.dataset.id);
        this.render();
      }
    });
  }

  editBoardData() {
    onClick(document, (e) => {
      if (e.target.classList.contains("todoTitle")) {
        onSubmit(e.target.parentNode.parentNode.children[1], (e) => {
          e.preventDefault();
          const title = e.target.children[0].value;
          const id = e.target.children[0].dataset.id;

          e.target.classList.remove("on");
          e.target.parentNode.children[0].classList.remove("off");

          this.model.editBoardData(title, id);
          this.render();
        });
      }
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
        this.render();
      }
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
        this.render();
      }
    });
  }
}
