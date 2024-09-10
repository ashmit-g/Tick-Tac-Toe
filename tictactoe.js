let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#resetButton");
let turnX = true;

let winnerMsg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msgContainer");

let userclickedPattern = [];
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnX = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    userclickedPattern.push(box.id);

    // console.log("box was clicked", box.id, box.innerHTML);
    //Player X
    if (turnX) {
      box.innerHTML = "<h3>X</h3>";

      box.firstChild.style.fontSize = "82px";

      box.firstChild.style.color = "#672538";

      turnX = false;
      //Player O
    } else {
      box.innerHTML = "<h3>O</h3>";
      box.firstChild.style.fontSize = "82px";
      box.firstChild.style.color = "#290133";
      turnX = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.enabled = false;
    box.disabled = false;

    box.innerHTML = "";
  });
};

const showWinner = (winner) => {
  winnerMsg.innerText = `Congratulations, Winner is ${winner}`;
  winnerMsg.style.color = "#290133";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (const pattern of winningPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
