import BoardItem from "../BoardItem/index.js";
import { onClick } from "../../helpers/index.js";

export default class BoardList {
  constructor({ onRemove }, boardItem = new BoardItem()) {
    this.boardItem = boardItem;
    this.onRemove = onRemove;
  }

  templete(data = []) {
    return data.map((item, index) => this.boardItem.templete(item)).join("");
  }
}
