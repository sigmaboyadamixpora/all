const button = document.getElementById("changeColorButton");
const header = document.getElementById("header");

button.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  header.style.color = randomColor;
});
