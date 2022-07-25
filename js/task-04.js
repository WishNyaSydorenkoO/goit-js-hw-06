let counterValue = 0;
const counter = {
  incr: document.querySelector("[data-action='increment']"),
  decr: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

const increment = () => {
  counterValue += 1;
  counter.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counter.span.textContent = counterValue;
};
counter.incr.addEventListener("click", increment);
counter.decr.addEventListener("click", decrement);
