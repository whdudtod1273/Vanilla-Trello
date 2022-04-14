export default class Model {
  constructor() {
    if (!this.getData()) {
      console.log("model");
      localStorage.setItem("boards", "[]");
    }
  }
  getData(key = "boards") {
    const getData = JSON.parse(localStorage.getItem(key));
    if (getData === null) false;
    return getData;
  }

  setData(data, key = "boards") {
    const setData = JSON.stringify([...this.getData(), data]);
    localStorage.setItem(key, setData);
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
