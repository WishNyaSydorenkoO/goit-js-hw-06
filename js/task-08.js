const formRef = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  if (mail.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  const formData = {
    mail,
    password,
  };
  formRef.reset();
  console.log(formData);
}
formRef.addEventListener("submit", handleSubmit);
