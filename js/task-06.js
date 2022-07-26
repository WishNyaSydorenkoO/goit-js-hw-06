const validationInput = document.querySelector("#validation-input");
const rightAmount = document.querySelector('input[data-length="6"]');
validationInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(rightAmount.dataset.length)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
console.log(rightAmount.dataset.length);
