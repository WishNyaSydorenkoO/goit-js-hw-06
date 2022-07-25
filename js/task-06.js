const validationInput = document.querySelector("#validation-input");
const rightAmount = document.querySelector('input[data-length="6"]');
validationInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(rightAmount.dataset.length)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else if (event.currentTarget.value.length > 0) {
    validationInput.classList.add("invalid");
  } else if (event.currentTarget.value.length === 0) {
    validationInput.classList.remove("invalid", "valid");
  }
});
console.log(rightAmount.dataset.length);
