const letters = "abcdefghijklmnopqrstuvwxyz";
const letterArray = Array.from(letters);
const lettersContainer = document.querySelector(".letters");
letterArray.forEach((letter) => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});
const words = {
  programming: ["PHP", "JavaScript", "Python"],
  movies: ["Spider Man", "Bat Man"],
  people: ["Son Tung", "Truong Giang", "Tran Thanh", "Trinh Cong Son"],
  countries: ["VietNam", "Cambodia", "Lao", "Singapore", "Malaysia"],
};
const allKeys = Object.keys(words);
// allKeys=["programming","movies",..]
//Math.floor() làm tròn, Math.random() tạo ra con số random
const randomPropNumber = Math.floor(Math.random() * allKeys.length);
// => Tạo ra 1 con số ngẫu nhiên từ 1 -> 4
const randomPropNumber2 = Math.floor(Math.random() * allKeys.length);
const randomPropName = allKeys[randomPropNumber];
const randomPropName2 = allKeys[randomPropNumber2];
// => allKeys[1->4]
const randomPropValue = words[randomPropName];
const randomPropValue2 = words[randomPropName2];
// => words[programming -> countries]
const randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
const randomValueNumber2 = Math.floor(Math.random() * randomPropValue2.length);
const randomValueValue2 = randomPropValue2[randomValueNumber2];
const randomValueValue = randomPropValue[randomValueNumber];
console.log(randomValueValue);
// Truong Giang, Cambodia, ...
document.querySelector(".game-info .category span").innerHTML = randomPropName;
const lettersGuessContainer = document.querySelector(".letters-guess");
const lettersAndSpace = Array.from(randomValueValue);
const lettersAndSpace2 = Array.from(randomValueValue2);
// =>['T','r','u','o','n','g',' ','G','i','a','n','g']
let correct = 0;
let nextGame = document.querySelector(".nextGame");
console.log(randomPropNumber);
let wrongTime = 0;
lettersAndSpace.forEach((space) => {
  let emptySpan = document.createElement("span");
  if (space === " ") {
    correct += 1;
    emptySpan.className = "with-space";
    // nếu letterAndSpace có ' ' thì sẽ có classname là with-space
  }
  lettersGuessContainer.appendChild(emptySpan);
});
let guessSpans = document.querySelectorAll(".letters-guess span");
let playAgainBoolean = false;
if (playAgainBoolean === true) {
  wrongTime = 0;
}
var score = 0;
var highScore = 0;
var token = 0;
const displayHighscore = function (highest) {
  document.querySelector("#highScore").innerHTML = highest;
};
const displayToken = function (token) {
  document.querySelector("#token").innerHTML = token;
};
nextGame.addEventListener("click", () => {
  let tokenPlus = localStorage.getItem("token");
  tokenPlus++;
  localStorage.setItem("token", tokenPlus);
  win.classList.remove("showWin");
  location.reload();
});
let lettersClick = document.querySelector(".letters");
lettersClick.addEventListener("click", (e) => {
  let theChosenWord = Array.from(randomValueValue.toLowerCase());
  console.log(e.target.className);
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    document.getElementById("clicked").play();
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    console.log(theChosenWord);

    theChosenWord.forEach((letter, index) => {
      if (theClickedLetter == letter) {
        correct += 1;
        theStatus = true;
        document.getElementById("ping").play();
        guessSpans.forEach((span, spanIndex) => {
          if (index === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });
  }
  let win = document.querySelector(".win");
  console.log(score);
  if (correct == theChosenWord.length || correct > theChosenWord.length) {
    win.classList.add("showWin");
    let scorePlus = localStorage.getItem("score");
    scorePlus++;
    console.log(scorePlus);
    let highScorest = sessionStorage.getItem("highScore", highScore);
    localStorage.setItem("score", scorePlus);
    document.getElementById("score").innerHTML = "&nbsp;" + 0;
    if (scorePlus > highScorest) {
      console.log(scorePlus, "setSocrPlus");
      console.log(highScore, "highScore");

      highScorest = scorePlus;
      sessionStorage.setItem("highScore", highScorest);
      displayHighscore(highScorest);
    }
  }
  let closeWin = document.querySelector(".closeWin");
  closeWin.addEventListener("click", () => {
    score = 0;
    localStorage.setItem("score", score);
    win.classList.remove("showWin");
    location.reload();
  });

  if (theStatus !== true) {
    wrongTime++;
    document.getElementById("fail").play();
    let head = document.querySelector(".head");
    let body = document.querySelector(".body");
    let hands = document.querySelector(".hands");
    let legs = document.querySelector(".legs");
    let rope = document.querySelector(".the-rope");
    console.log(body);
    console.log(wrongTime);
    if (wrongTime == 5) {
      endGame();
      console.log(token, "-");
      let tokenMinus = localStorage.getItem("token");
      tokenMinus--;
      localStorage.setItem("token", tokenMinus);

      lettersContainer.classList.add("finished");
      if (tokenMinus < 1) {
        alert("Het luot roi di subcrise đi");
      }
    }
    if (wrongTime == 1) {
      rope.classList.add("showHead");
    } else if (wrongTime == 2) {
      head.classList.add("showHead");
    } else if (wrongTime == 3) {
      body.classList.add("showHead");
    } else if (wrongTime == 4) {
      hands.classList.add("showHead");
    } else if (wrongTime == 5) {
      legs.classList.add("showHead");
    }
  }
});

function endGame() {
  score = 0;
  localStorage.setItem("score", score);
  document.getElementById("score").innerHTML = "&nbsp;" + score;
  let over = document.querySelector(".gameOver");
  over.classList.add("showOver");
}
let stoped = document.querySelector(".stop");

stoped.addEventListener("click", () => {
  let over = document.querySelector(".gameOver");
  over.classList.remove("showOver");
  let stopScreen = document.querySelector(".stopScreen");

  stopScreen.classList.add("showStop");
});

let playAgain = document.querySelector(".playAgain");
playAgain.addEventListener("click", (e) => {
  playAgainBoolean = true;
  location.reload();
  let token = localStorage.getItem("token");
  let letter = document.querySelector(".letters");

  if (token < 1) {
    alert("sao còn chưa đi nữa v ? chơi gì nữa");
    letter.classList.add(".finished");
  }
});
let token3 = localStorage.getItem("token");
let letter = document.querySelector(".letters");

if (token3 < 1) {
  console.log("true");
  alert("sao còn chưa đi nữa v ? chơi gì nữa");
  letter.classList.add("move");
}
let donateButton = document.querySelector("#donate");
let donateBar = document.querySelector(".donateBar");
let closeDonate = document.querySelector(".closeDonate");
closeDonate.addEventListener("click", () => {
  donateBar.classList.remove("showBar");
});
donateButton.addEventListener("click", () => {
  donateBar.classList.add("showBar");
});

let donateBtn = document.querySelector(".donateBtn");
donateBtn.addEventListener("click", () => {
  let tokenPlus2 = localStorage.getItem("token");
  tokenPlus2++;
  localStorage.setItem("token", tokenPlus2);
  alert("Cám ơn bạn đã donate, Token + 1");
  location.reload();
});

