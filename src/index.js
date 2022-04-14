import Controller from "./controller/index.js";
import Model from "./model/index.js";

document.addEventListener("DOMContentLoaded", app);

function app() {
  console.log("[app]");
  const model = new Model();
  new Controller(model);
}
