//<button type="button" id="button">OFF</button>

const buttonElem = document.getElementsById('button');
buttonElem.addEventListener('click', () => {
  const oldText = buttonElem.innerText;
  return button.innerText = oldText === "ON" ? "OFF" : "ON";
});