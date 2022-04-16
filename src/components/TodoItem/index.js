export default class TodoItem {
  constructor() {}
  templete(item, boardId) {
    return `
    <li class="todoBox" data-board-id="${boardId}" data-id="${item.id}" >
      <span class="todoDeleteBtn" data-board-id="${boardId}" data-id="${item.id}">&times;</span>
      <p class="todoContent" data-board-id="${boardId}" data-id="${item.id}">${item.content}</p>
    </li>
    `;
  }
}
