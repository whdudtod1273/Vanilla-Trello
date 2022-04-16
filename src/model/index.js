export default class Model {
  constructor() {
    if (!this.getData()) {
      localStorage.setItem("boards", "[]");
    }
  }
  getData(key = "boards") {
    const getData = JSON.parse(localStorage.getItem(key));
    if (getData === null) false;
    return getData;
  }

  setBoardData(data, key = "boards") {
    const setData = JSON.stringify([...this.getData(), data]);
    localStorage.setItem(key, setData);
  }

  setTodoData(todo, id) {
    const todoList = this.getData().map((item, index) => {
      if (item.id === Number(id)) {
        item.todos = [...item.todos, todo];
      }
      return item;
    });
    const setData = JSON.stringify(todoList);
    localStorage.setItem("boards", setData);
  }

  deleteBoardData(id) {
    const deleteData = this.getData().filter((item) => {
      return item.id !== Number(id);
    });
    localStorage.setItem("boards", JSON.stringify(deleteData));
  }

  deleteTodoData(boardId, id) {
    const deleteData = this.getData().map((item) => {
      if (item.id === Number(boardId)) {
        item.todos = item.todos.filter((item) => item.id !== Number(id));
      }
      return item;
    });
    localStorage.setItem("boards", JSON.stringify(deleteData));
  }

  editBoardData(title, id) {
    const editData = this.getData().map((item) => {
      if (item.id === Number(id)) {
        item.title = title;
      }
      return item;
    });
    localStorage.setItem("boards", JSON.stringify(editData));
  }

  editTodoData(content, boardId, id) {
    const editData = this.getData().map((item) => {
      if (item.id === Number(boardId)) {
        item.todos = item.todos.map((item) => {
          if (item.id === Number(id)) {
            console.log(item.content);
            item.content = content;
          }
          return item;
        });
      }
      return item;
    });
    localStorage.setItem("boards", JSON.stringify(editData));
  }
}
