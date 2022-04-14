export default class TodoItem {
  constructor() {}
  templete(item) {
    return `
    <li class="todoBox">
      <p>${item.content}</p>
    </li>
    `;
  }
}
