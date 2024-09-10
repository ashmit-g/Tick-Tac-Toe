now check  length of array
use case if the length of the array is 3 then check the pattern
    let lengthofArray = userclickedPattern.length;
    if (lengthofArray == 3) {
      let winnerPatterFalse = false;
      winningPatterns.forEach((arr) => {
        arr.forEach((ele, i) => {
          if (ele == userclickedPattern[i]) {
            winnerPatterFalse = true;
          } else {
            winnerPatterFalse = false;
          }
        });
        if (winnerPatterFalse == true) {
          return console.log("user win");
          // break;
        } else {
          userclickedPattern = [];
        }
      });
      //  now  compare the three with
    }

    console.log(userclickedPattern);
  });
});

winningPatttern.forEach(pattern => {
    console.log(winningPattern)
})






const checkWinner = () => {
    for (const pattern of winningPatterns) {
      const pos1 = boxes[pattern[0]].innerText;
      const pos2 = boxes[pattern[1]].innerText;
      const pos3 = boxes[pattern[2]].innerText;

      console.log(pos1, pos2, pos3);

      // console.log(pattern[0], pattern[1], pattern[2]);
    }
  };
});