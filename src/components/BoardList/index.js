import BoardItem from "../BoardItem/index.js";
import { onClick } from "../../helpers/index.js";

export default class BoardList {
  constructor() {
    this.boardItem = new BoardItem();
  }

  templete(data = []) {
    return data.map((item, index) => this.boardItem.templete(item)).join("");
  }
}
