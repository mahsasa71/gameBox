const rows = 10;
const cols = 10;
let board = document.getElementById("board");
let scoreDisplay = document.getElementById("score");

let snake = [{ x: 5, y: 5 }];
let direction = { x: 0, y: 0 };
let food = { x: 2, y: 2 };
let score = 0;

function createBoard() {
  for (let y = 0; y < rows; y++) {
    let row = board.insertRow();
    for (let x = 0; x < cols; x++) {
      let cell = row.insertCell();
      cell.className = "w-5 h-5 border border-gray-300/30"; // سلول‌ها
    }
  }
}

function drawBoard() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      board.rows[y].cells[x].className = "w-5 h-5 border border-gray-300/30";
    }
  }
  for (let part of snake) {
    board.rows[part.y].cells[part.x].className = "w-5 h-5 border border-gray-300/30 bg-lime-500"; // مار
  }
  board.rows[food.y].cells[food.x].className = "w-5 h-5 border border-gray-300/30 bg-red-500"; // غذا
}

function moveSnake() {
  if (direction.x === 0 && direction.y === 0) return;

  let head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
    alert("باختی!");
    resetGame();
    return;
  }

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      alert("باختی!");
      resetGame();
      return;
    }
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreDisplay.textContent = score;
    placeFood();
  } else {
    snake.pop();
  }

  drawBoard();
}

function placeFood() {
  food.x = Math.floor(Math.random() * cols);
  food.y = Math.floor(Math.random() * rows);
}

function resetGame() {
  snake = [{ x: 5, y: 5 }];
  direction = { x: 0, y: 0 };
  score = 0;
  scoreDisplay.textContent = score;
  placeFood();
  drawBoard();
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (direction.y !== 1) direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (direction.y !== -1) direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (direction.x !== 1) direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (direction.x !== -1) direction = { x: 1, y: 0 };
      break;
  }
});

createBoard();
drawBoard();
setInterval(moveSnake, 300);

window.addEventListener("keydown", function (e) {

  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
    e.preventDefault(); 
  }
});
