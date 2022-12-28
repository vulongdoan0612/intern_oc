const screen = document.querySelector("#screen");
const previewScreen = document.querySelector("#preview-screen");

function createEl(Element, InnerText, Parent, Class) {
  const newElement = document.createElement(Element);
  newElement.classList.add(Class);
  newElement.innerText = InnerText;
  Parent.appendChild(newElement);
}

// create play screen, tạo các thẻ div, tức các ô vuông bên trong screen
for (let i = 0; i<200; i++) {
  createEl("div", "", screen);
}

// create frozen screen tạo thẻ div bên trong creen có class là taken, 
for (let i = 0; i<20; i++) {
  createEl("div", "", screen, "taken");
}

// create preview screen
for (let i = 0; i<20; i++) {
  createEl("div", "", previewScreen);
}

// khởi tạo squares là 1 mảng chứa các ô vuông đã tạo bên trong screen
let squares = Array.from(document.querySelectorAll("#screen div"));
// console.log("squares" , squares)

const scoreEl = document.querySelector("#score");
const startEl = document.querySelector("#start");
const highScoreEl = document.querySelector("#high-score");
const scorePopEl = document.querySelector("#score-pop");
const highScorePopEl = document.querySelector("#high-score-pop");
const width = 10;

let nextRandom = 0;
let timerId;
let speed = 500;
let score = 0;
let started = false;
let over = false;
const colors = ["#fdb827", "#542583", "#000000", "#007a33", "#ba9653", "#963821", "#000000"]; // gold, purple, black, green, celtics gold, brown, black


const playNowBtn = document.querySelector('.playNow__btn')
const rePlayBtn = document.querySelector('.rePlay__btn')

const modal = document.querySelector(".modal")
const startModal = document.querySelector(".start-modal")
const restartModal = document.querySelector(".restart-modal")

const ticketsEl = document.querySelector('.tickets')
const ticketsLeftEl = document.querySelector('.tickets-left')
const poptt = document.querySelector('.pop__tt')


// các tetrominoes
const lt = [
    [1, width+1, width*2+1, width*2+2],
    [width, width+1, width+2, width*2],
    [0, 1, width+1, width*2+1],
    [2, width, width+1, width+2]
]
const jt = [
  [1, width+1, width*2+1, 2],
  [width, width+1, width+2, width*2+2],
  [1, width+1, width*2+1, width*2],
  [0, width, width+1, width+2]
]
const st = [
  [1, width+1, width+2, width*2+2],
  [width+1, width+2, width*2, width*2+1],
  [1, width+1, width+2, width*2+2],
  [width+1, width+2, width*2, width*2+1]
]
const zt = [
  [2, width+1, width+2, width*2+1],
  [width, width+1, width*2+1, width*2+2],
  [2, width+1, width+2, width*2+1],
  [width, width+1, width*2+1, width*2+2]
]
const tt = [
  [1, width, width+1, width+2],
  [1, width+1, width+2, width*2+1],
  [width, width+1, width+2, width*2+1],
  [1, width, width+1, width*2+1]
]
const ot = [
  [1, 2, width+1, width+2],
  [1, 2, width+1, width+2],
  [1, 2, width+1, width+2],
  [1, 2, width+1, width+2]
]
const it = [
  [1, width+1, width*2+1, width*3+1],
  [width, width+1, width+2, width+3],
  [1, width+1, width*2+1, width*3+1],
  [width, width+1, width+2, width+3]
]
const tetrominoes = [lt, jt, st, zt, tt, ot, it]

let currentPosition = 3
let currentRotation = 0

let random = Math.floor(Math.random() * tetrominoes.length)

// current là các tetromino đc random ra với nằm chiều mặc định
let current = tetrominoes[random][currentRotation]
// console.log("curr",current)

// draw the tetromino
const draw = () => {
  current.forEach(index => {
    squares[currentPosition + index].classList.add("tetromino")
    squares[currentPosition + index].style.backgroundColor = colors[random]
    // console.log("curr",index)
  })
}


const undraw = () => {
  current.forEach(index => {
    squares[currentPosition + index].classList.remove("tetromino");
    squares[currentPosition + index].style.backgroundColor = "";
  });
}

// các phím điều khiển
const control = (e) => {
  if (e.keyCode === 37) {
    moveLeft();
  }
  else if (e.keyCode === 38) {
    rotate();
  }
  else if (e.keyCode === 39) {
    moveRight();
  }
  else if (e.keyCode === 40) {
    moveDown();
  }
  else if (e.keyCode === 32) {
    console.log("space -> move bottom");
    e.preventDefault();
    moveBottom();
  }
  else if (e.keyCode === 27) {
    startPause();
  }
  else {
    console.log(e.keyCode);
  }
}

const moveDown = () => {
  undraw();
  currentPosition += width;
  draw();
  freeze();
}

const moveBottom = () => {
  while (!current.some(index => squares[currentPosition + index + width].classList.contains("taken"))) {
    undraw();
    currentPosition += width;
    draw();
  }
  freeze();
}

//freeze when tetromino touches taken square xếp gạch ngay khi gạch chạm taken
const freeze = () => {
  if (current.some(index => squares[currentPosition + index + width].classList.contains("taken"))) {
    current.forEach(index => squares[currentPosition + index].classList.add("taken"));
    // tetromino mới tạo ra sau khi tetromino được taken
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * tetrominoes.length);
    current = tetrominoes[random][currentRotation];
    currentPosition = 3;
    draw();
    displayShape();
    addScore();
    gameOver();
  }
}

// di chuyển sang trái
const moveLeft = () => {
  undraw();
  if (!isAtLeft()) {
    currentPosition -= 1;
  }
  if (current.some(index => squares[currentPosition + index].classList.contains("taken"))) {
    currentPosition += 1;
  }
  draw();
}
const isAtLeft = () => {
  return current.some(index=> (currentPosition + index) % width === 0)
  // khi gạch đã chạm vào giới hạn trái thì sẽ ko si chuyến sang trái được nữa
}

// di chuyển sang phải
const moveRight = () => {
  undraw();
  if (!isAtRight()) {
    currentPosition += 1;
  }
  if (current.some(index => squares[currentPosition + index].classList.contains("taken"))) {
    currentPosition -= 1;
  }
  draw();
}
const isAtRight  = () => {
  return current.some(index=> (currentPosition + index + 1) % width === 0)  
  // khi gạch đã chạm vào giới hạn phải thì sẽ ko si chuyến sang phải được nữa
}

// ROTATION
const checkRotatedPosition = (P) =>{
  P = P || currentPosition;
  if ((P+1) % width < 4) {
    if (isAtRight()) {
      currentPosition += 1;
      checkRotatedPosition(P);
    }
  }
  else if (P % width > 5) {
    if (isAtLeft()) {
      currentPosition -= 1;
      checkRotatedPosition(P);
    }
  }
}

// rotate tetromino
const rotate = () => {
  undraw();
  currentRotation ++;
  if (currentRotation === tetrominoes[random].length) {
    currentRotation = 0;
  }
  current = tetrominoes[random][currentRotation];
  checkRotatedPosition();
  draw();
}

// show next tetromino in preview
const displaySquares = document.querySelectorAll("#preview-screen div");
const displayWidth = 4;
const displayIndex = 0;

const upNextTetrominoes = [
  [1, displayWidth+1, displayWidth*2+1, displayWidth*2+2], //lTetromino
  [1, displayWidth+1, displayWidth*2+1, 2], //jTetromino
  [1, displayWidth+1, displayWidth+2, displayWidth*2+2], //sTetromino
  [2, displayWidth+1, displayWidth+2, displayWidth*2+1], //zTetromino
  [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
  [1, 2, displayWidth+1, displayWidth+2], //oTetromino
  [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
];

// display the preview tetromino
const displayShape=()=> {
  displaySquares.forEach(square => {
    square.classList.remove("tetromino");
    square.style.backgroundColor = "";
  });
  upNextTetrominoes[nextRandom].forEach(index => {
    displaySquares[displayIndex + index].classList.add("tetromino");
    displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom];
  });
}

const startPause = () => {
  // pause
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    startEl.innerHTML = "Play";
    document.removeEventListener("keyup", control);
  }
  // resume
  else if (started) {
    startEl.innerHTML = "Pause";
    draw();
    timerId = setInterval(moveDown, speed);
    document.addEventListener("keyup", control);
  }
  // restart
  else if (over && tickets>0) {
    resetGame();
    started = true;
    startEl.innerHTML = "Pause";
    draw();
    timerId = setInterval(moveDown, speed);
    nextRandom = Math.floor(Math.random() * tetrominoes.length);
    displayShape();
    document.addEventListener("keyup", control);
  }
  else if (tickets<1) {
    restartModal.classList.add('showModal')
    document.removeEventListener("keyup", control);
    warn.classList.add('displayBlock')
    popRe.classList.add('displayNone')
  }
  
  // play
  else {
    started = true;
    startEl.innerHTML = "Pause";
    draw();
    timerId = setInterval(moveDown, speed);
    nextRandom = Math.floor(Math.random() * tetrominoes.length);
    displayShape();
    document.addEventListener("keyup", control);
  }

  // console.log(timerId)
}

startEl.addEventListener("click", (e) => {
  e.preventDefault();
  startPause();
});


playNowBtn.addEventListener("click", (e) => {
  e.preventDefault();
  startPause();
  startModal.classList.remove('showModal')
});

rePlayBtn.addEventListener("click", (e) => {
  e.preventDefault();
  startPause();
  restartModal.classList.remove('showModal')
});

const addScore=()=> {
  for (let i=0; i< 199; i+=width) {
    const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];
    if (row.every(index => squares[index].classList.contains("taken"))) {
      score += 10;
      scoreEl.innerHTML = score;
      scorePopEl.innerHTML = score;

      row.forEach(index => {
        squares[index].classList.remove("taken");
        squares[index].classList.remove("tetromino");
        squares[index].style.backgroundColor = "";
      });
      const squaresRemoved = squares.splice(i, width);
      squares = squaresRemoved.concat(squares);
      squares.forEach(cell => screen.appendChild(cell));
    }
  }
}
const popRe = document.querySelector('.pop_re')
const warn = document.querySelector('.warn')
const cancerBtn = document.querySelector(".cancer")
const buyBtn = document.querySelector(".buy")

cancerBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  startModal.classList.add('showModal')
  restartModal.classList.remove('showModal')
  ticketsEl.innerHTML="0"
})

let tickets = localStorage.getItem("tickets")

ticketsEl.innerHTML=tickets


let highscore = localStorage.getItem("highscore");
function gameOver() {
  if (current.some(index => squares[currentPosition + index].classList.contains("taken"))) {
    clearInterval(timerId);
    timerId = null;
    started = false;
    over = true;
    startEl.innerHTML = "Restart";
    
    restartModal.classList.add('showModal')
    document.removeEventListener("keyup", control);


    //tickets
    localStorage.setItem("tickets", 3)
    tickets = tickets - 1;
    localStorage.setItem("tickets", tickets)

    if (tickets < 1) {
      warn.classList.add('displayBlock')
      popRe.classList.add('displayNone')
    }

    ticketsLeftEl.innerHTML=tickets

    //highscore
    if(highscore !== null){
        if (score > highscore) {
            localStorage.setItem("highscore", score);      
        }
    }
    else{
        localStorage.setItem("highscore", score);
    }
    highScoreEl.innerHTML = localStorage.getItem("highscore");
    highScorePopEl.innerHTML = localStorage.getItem("highscore");
  }
}


highScoreEl.innerHTML = localStorage.getItem("highscore");

const resetGame=()=> {
  for (let i=0; i<200; i++) {
    squares[i].classList.remove("tetromino", "taken");
    squares[i].style.backgroundColor = "transparent";
  }
  for (let i=0; i<20; i++) {
    displaySquares[i].classList.remove("tetromino");
    displaySquares[i].style.backgroundColor = "transparent";
  }
  score = 0;
  scoreEl.innerHTML = score;
}