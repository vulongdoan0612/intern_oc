window.onload = function () {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var categories; // Array of topics
  var chosenCategory; // Selected catagory
  var getHint; // Word getHint
  var word; // Selected word
  var guess; // Geuss
  var geusses = []; // Stored geusses
  var lives; // Lives
  var counter; // Count correct geusses
  var space; // Number of spaces in word '-'
  let score = 0;
  let highScore = 0;

  let token = 3;

  let theStatus = false;
  // Get elements
  var hintModal = document.getElementById("hintModal");
  var youWin = document.getElementById("youWin");
  var donate = document.getElementById("donate");
  var submitDonate = document.getElementById("submitBank");

  var gameOver = document.getElementById("gameOver");
  var showLives = document.getElementById("mylives");
  var showScore = document.getElementById("showScore");
  var closeHintModal = document.getElementById("closeHintModal");
  var donateBank = document.getElementById("donateBank");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");
  const displayScore = function (score) {
    document.querySelector("#score").innerHTML = score;
  };
  const displayHighscore = function (highest) {
    document.querySelector("#highScore").innerHTML = highest;
  };
  const displayToken = function (token) {
    document.querySelector("#token").innerHTML = token;
  };
  // create alphabet ul
  var buttons = function () {
    let myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML =
        "The Chosen Category Is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Cities";
    }
  };

  // Create geusses ul
  result = function () {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };
  comments = function () {
    let myButtons = document.getElementById("buttons");

    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      let tokenMinus = localStorage.getItem("token");
      tokenMinus--;
      localStorage.setItem("token", tokenMinus);
      displayToken(tokenMinus);
      myButtons.classList.add("finished");
      gameOver.classList.add("showGameOver");
      showScore.innerHTML = score;
      score = 0;
      localStorage.setItem("score", score);
      let getScore = localStorage.getItem("score");
      displayScore(getScore);
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
        theStatus = true;
        myButtons.classList.add("finished");

        youWin.classList.add("showYouWin");
      }
    }
    if (theStatus === true) {
      let tokenPlus = localStorage.getItem("token");
      tokenPlus++;
      localStorage.setItem("token", tokenPlus);
      displayToken(tokenPlus);
      score += 1;
      localStorage.setItem("score", score);
      displayScore(localStorage.getItem("score") || 0);
      let highScorest = localStorage.getItem("highScore");
      displayHighscore(highScorest || 0);
      if (score > highScorest) {
        highScorest = score;
        localStorage.setItem("highScore", highScorest);
        displayHighscore(localStorage.getItem("highScore"));
      }
    }
    tokenLeft();
  };

  let tokenDisplay = localStorage.getItem("token") || 3;
  localStorage.setItem("token", tokenDisplay);
  displayToken(tokenDisplay);
  let local = localStorage.getItem("highScore") || 0;
  localStorage.setItem("highScore", local);
  displayHighscore(localStorage.getItem("highScore") || 0);
  localStorage.setItem("score", score);
  displayScore(localStorage.getItem("score") || 0);

  var donateClick = () => {
    donate.addEventListener("click", () => {
      donate.classList.remove("showDonate");

      var setTime = () => {
        donateBank.classList.add("showDonateBank");
      };
      setTimeout(setTime, 500);
    });
  };
  var submitBank = () => {
    submitDonate.addEventListener("click", () => {
      validateForm();
      resetGame();
      let tokenDisplayAfterDonate = localStorage.getItem("token");
      localStorage.setItem("token", tokenDisplayAfterDonate);
      displayToken(tokenDisplayAfterDonate);
    });
  };
  submitBank();
  var validateForm = () => {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      console.log("Pin must be filled out");
      return false;
    } else if (x.length <= 2) {
      console.log("Pin must be more than 2 numbers");
    } else if (x.length > 2) {
      console.log("succesfull donation");
      let tokenDisplay = localStorage.getItem("token") || 3;
      tokenDisplay++;
      localStorage.setItem("token", tokenDisplay);
      donateBank.classList.remove("showDonateBank");
    }
    tokenLeft();
  };
  var tokenLeft = () => {
    let myButtons = document.getElementById("buttons");
    let myStickman = document.getElementById("stickman");
    let catagoryName = document.getElementById("catagoryName");
    let hold = document.getElementById("hold");
    let mylives = document.getElementById("mylives");
    let tokenLocal = localStorage.getItem("token");

    if (tokenLocal < 1) {
      donateClick();
      donate.classList.add("showDonate");
      myButtons.classList.add("removeButtons");
      myStickman.classList.add("removeButtons");
      catagoryName.classList.add("removeButtons");
      getHint.classList.add("removeButtons");
      hold.classList.add("removeButtons");
      mylives.classList.add("removeButtons");
    } else if (tokenLocal > 0) {
      donate.classList.remove("showDonate");
      myButtons.classList.remove("removeButtons");
      myStickman.classList.remove("removeButtons");
      catagoryName.classList.remove("removeButtons");
      getHint.classList.remove("removeButtons");
      hold.classList.remove("removeButtons");
      mylives.classList.remove("removeButtons");
    }
  };
  tokenLeft();
  // Animate man
  var animate = function () {
    var drawMe = lives;
    drawArray[drawMe]();
  };

  // Hangman
  canvas = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  head = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  torso = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1,
  ];

  // OnClick Function
  check = function () {
    list.onclick = function () {
      var geuss = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = word.indexOf(geuss);
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    };
  };

  // Play
  play = function () {
    categories = [
      [
        "everton",
        "liverpool",
        "swansea",
        "chelsea",
        "hull",
        "manchester-city",
        "newcastle-united",
      ],
      ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
      ["manchester", "milan", "madrid", "amsterdam", "prague"],
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log("word is:", word);
    buttons();
    geusses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  };

  play();

  // Hint

  hint.onclick = function () {
    hints = [
      [
        "Based in Mersyside",
        "Based in Mersyside",
        "First Welsh team to reach the Premier Leauge",
        "Owned by A russian Billionaire",
        "Once managed by Phil Brown",
        "2013 FA Cup runners up",
        "Gazza's first club",
      ],
      [
        "Science-Fiction horror film",
        "1971 American action film",
        "Historical drama",
        "Anamated Fish",
        "Giant great white shark",
      ],
      [
        "Northern city in the UK",
        "Home of AC and Inter",
        "Spanish capital",
        "Netherlands capital",
        "Czech Republic capital",
      ],
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    hintModal.classList.add("showHintModal");
    showClue.innerHTML = hints[catagoryIndex][hintIndex];
  };
  closeHintModal.addEventListener("click", () => {
    hintModal.classList.remove("showHintModal");
  });
  // Reset
  var resetGame = () => {
    document.getElementById("reset").onclick = function () {
      gameOver.classList.remove("showGameOver");
      theStatus = false;
      let myButton = document.getElementById("buttons");
      myButton.classList.remove("finished");
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    };
  };
  resetGame();
  document.getElementById("resetWin").onclick = function () {
    youWin.classList.remove("showYouWin");
    theStatus = false;
    let myButton = document.getElementById("buttons");

    myButton.classList.remove("finished");

    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  };
};
