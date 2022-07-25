const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
fontSizeControlRef.oninput = () =>
  (textRef.style.fontSize = fontSizeControlRef.value + "px");
