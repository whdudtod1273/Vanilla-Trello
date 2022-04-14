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

  removeData(data, key = "boards") {
    const removeData = JSON.stringify(data);
    localStorage.setItem(key, removeData);
  }

  editData(data, key = "boards") {
    const editData = JSON.stringify(data);
    localStorage.setItem(key, editData);
  }
}
