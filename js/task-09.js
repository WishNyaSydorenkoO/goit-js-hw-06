function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyRef: document.body,
  changeButtonRef: document.querySelector(".change-color"),
  backgroundColorRef: document.querySelector(".color"),
};

function render() {
  const color = getRandomHexColor();
  refs.bodyRef.style.backgroundColor = color;
  refs.backgroundColorRef.textContent = color;
}

refs.changeButtonRef.addEventListener("click", render);
