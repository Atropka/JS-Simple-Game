const board = document.querySelector("#board");

const colors = [
  "#ff8f49",
  "#ffff49",
  "#64ff49",
  "#49f6ff",
  "#6449ff",
  "#f349ff",
  "#ff4949",
];

const squareNum = 504;

for (let i = 0; i < squareNum; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #1d1d1d`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
