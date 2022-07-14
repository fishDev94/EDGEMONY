const newEl = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const createCard = (parent, imgLink, title, category, price) => {
  const wrapperEl = newEl("div");
  const titleEl = newEl("h3");
  const categoryEl = newEl("p");
  const priceEl = newEl("p");
  const imgEl = newEl("img");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  categoryEl.className = "category";
  priceEl.className = "price";
  imgEl.className = "img";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title;
  categoryEl.textContent = category;
  priceEl.textContent = price;

  wrapperEl.append(imgEl, titleEl, categoryEl, priceEl);
  parent.appendChild(wrapperEl);
};

export { newEl, createCard, q };
