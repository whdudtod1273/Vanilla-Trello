import BoardList from "../components/BoardList/index.js";
import { $, createId, onClick } from "../helpers/index.js";
export default class Controller {
  constructor(model) {
    this.model = model;
    this.nowDate = new Date();

    this.addBarodButton = $(".addBoardBtn");
    this.boardContainer = $(".boardContainer");

    this.boardList();
    this.addBoard();
    this.addTodo();
    this.render();
  }

  render() {
    this.boardContainer.innerHTML = this.BoardList.templete(this.model.getData());
  }

  addBoard() {
    onClick(this.addBarodButton, (e) => {
      const title = prompt("추가할 Board를 입력하세요.", "내용");
      if (title) {
        this.model.setData({ id: createId(this.nowDate), title, todos: [] }, "boards");
      }
      this.render();
    });
  }

  addTodo() {
    onClick(document, (e) => {
      if (e.target.classList.contains("todoAddBtn")) {
        const content = prompt("추가할 Todo를 입력해주세요.", "내용");
        console.log(e.target.parentNode.parentNode.dataset.id);
      }
    });
  }

  boardList() {
    this.BoardList = new BoardList({
      onRemove: (id) => {
        const removeData = this.model.getData().filter((item) => {
          return item.id !== Number(id);
        });
        this.removeData(removeData);
      },
    });
    return this.BoardList;
  }
}
