const date = new Date();

export const $ = (selector) => {
  if (selector.split("")[0] === ".") {
    return document.querySelector(selector);
  } else if (selector.split("")[0] === "#") {
    return document.getElementById(selector.slice(1));
  } else {
    throw "no selector";
  }
};

export const onClick = (target, handler) => {
  target.addEventListener("click", handler);
};

export const createId = () => {
  const idDate =
    `${date.getFullYear()}` +
    `${date.getMonth() + 1}` +
    `${date.getDate()}` +
    `${date.getHours()}` +
    `${date.getMinutes()}`;
  const id = Math.floor(Number(idDate) + Math.random() * Number(idDate));
  return id;
};
