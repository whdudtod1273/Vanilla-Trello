export default class BoardItem {
  constructor() {}
  templete(item) {
    return `
    <section class="boardWrapper" data-id="${item.id}">
      <div class="boardBox">
        <h2 class="todoTitle">${item.title}</h2>
        <ul class="todoWrapper">
          
        </ul>
        <div class="todoAddBtn">+ Add a Card</div>
      </div>
    </section>`;
  }
}
