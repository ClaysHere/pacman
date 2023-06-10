const position = { x: 0, y: 0 };
let showLoveMessage = false;
const gameElement = document.getElementById("game");
const pacMan = document.querySelector(".pac-man");
const eye = document.querySelector(".eye");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const up = document.querySelector("#up");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const down = document.querySelector("#down");

let intervalId = null;

const handleKeyPress = (event) => {
  const { key } = event;
  const { x, y } = position;

  if (key === "ArrowUp" && y > 0) {
    position.y = y - 1;
    gameElement.style.transform = "rotate(270deg)";
    eye.style.left = "80px";
    eye.style.top = "20px";
  } else if (key === "ArrowDown" && y < screenHeight - 1) {
    position.y = y + 1;
    gameElement.style.transform = "rotate(90deg)";
    eye.style.left = "80px";
    eye.style.top = "20px";
  } else if (key === "ArrowLeft" && x > 0) {
    position.x = x - 1;
    gameElement.style.transform = "rotate(180deg)";
    eye.style.left = "80px";
    eye.style.top = "140px";
  } else if (key === "ArrowRight" && x < screenWidth - 1) {
    position.x = x + 1;
    gameElement.style.transform = "rotate(0)";
    eye.style.left = "80px";
    eye.style.top = "20px";
  }

  if (y === 5 && x === 5) {
    showLoveMessage = true;
  } else {
    showLoveMessage = false;
  }

  updateGame();
};

const moveUp = () => {
  if (position.y > 0) {
    position.y = position.y - 1;
    gameElement.style.transform = "rotate(270deg)";
    eye.style.left = "80px";
    eye.style.top = "20px";
    updateGame();
  }
};

const moveDown = () => {
  if (position.y < screenHeight - 1) {
    position.y = position.y + 1;
    gameElement.style.transform = "rotate(90deg)";
    eye.style.left = "80px";
    eye.style.top = "20px";
    updateGame();
  }
};

const moveLeft = () => {
  if (position.x > 0) {
    position.x = position.x - 1;
    gameElement.style.transform = "rotate(180deg)";
    eye.style.left = "80px";
    eye.style.top = "140px";
    updateGame();
  }
};

const moveRight = () => {
  if (position.x < screenWidth - 1) {
    position.x = position.x + 1;
    gameElement.style.transform = "rotate(0)";
    eye.style.left = "80px";
    eye.style.top = "20px";
    updateGame();
  }
};

const handleMouseDown = (event) => {
  const { target } = event;
  clearInterval(intervalId);

  if (target === up) {
    intervalId = setInterval(moveUp, 100);
  } else if (target === down) {
    intervalId = setInterval(moveDown, 100);
  } else if (target === left) {
    intervalId = setInterval(moveLeft, 100);
  } else if (target === right) {
    intervalId = setInterval(moveRight, 100);
  }
};

const handleMouseUp = () => {
  clearInterval(intervalId);
};

const handleMouseLeave = () => {
  clearInterval(intervalId);
};

const updateGame = () => {
  gameElement.style.top = `${position.y * 10}px`;
  gameElement.style.left = `${position.x * 10}px`;

  const loveMessageElement = document.getElementById("love-message");
  if (position.y === 20 && position.x === 20) {
    showLoveMessage = true;
  } else {
    showLoveMessage = false;
  }

  if (showLoveMessage) {
    loveMessageElement.style.display = "block";
  } else {
    loveMessageElement.style.display = "none";
  }
};

const handleTouchStart = (event) => {
  const { target } = event.touches[0];
  clearInterval(intervalId);

  if (target === up) {
    intervalId = setInterval(moveUp, 100);
  } else if (target === down) {
    intervalId = setInterval(moveDown, 100);
  } else if (target === left) {
    intervalId = setInterval(moveLeft, 100);
  } else if (target === right) {
    intervalId = setInterval(moveRight, 100);
  }
};

const handleTouchEnd = () => {
  clearInterval(intervalId);
};

up.addEventListener("mousedown", handleMouseDown);
down.addEventListener("mousedown", handleMouseDown);
left.addEventListener("mousedown", handleMouseDown);
right.addEventListener("mousedown", handleMouseDown);

up.addEventListener("touchstart", handleTouchStart);
down.addEventListener("touchstart", handleTouchStart);
left.addEventListener("touchstart", handleTouchStart);
right.addEventListener("touchstart", handleTouchStart);

document.addEventListener("mouseup", handleMouseUp);
document.addEventListener("mouseleave", handleMouseLeave);

up.addEventListener("touchend", handleTouchEnd);
down.addEventListener("touchend", handleTouchEnd);
left.addEventListener("touchend", handleTouchEnd);
right.addEventListener("touchend", handleTouchEnd);

document.addEventListener("keydown", (event) => {
  handleKeyPress(event);
});

up.addEventListener("click", moveUp);
down.addEventListener("click", moveDown);
left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);
