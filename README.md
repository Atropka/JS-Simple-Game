# JS-Simple-Game
_______________
## Это пример, показывающий разаработку простой мини-игры с использованием JavaScript, HTML, CSS

### Основная задача: Реализация объектов на сайте с использованием JS. При движении курсора, ячейки должны менять цвет на случайный


```html
//Данный код, показывает, что сайт полностью зависит от js файла
<body>
    <div class="container" id="board"></div>
    <script src="/app.js"></script>
  </body>
```

```js
//Тут представлены основные функции, используемые для реализации сайта
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
```


## Результат работы сайта:
![resualt](https://sun9-86.userapi.com/impg/MmZbzfPcQEYOFsVsPCJIQP7F562AoyD30eTdXA/PJhB71YLChQ.jpg?size=1102x700&quality=96&sign=2e43488d3ee7c12a775ec2d4d1120c62&type=album)
