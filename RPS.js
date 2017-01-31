function RockPaperScissors(userChoice){
    var game;
    var userStr;
    var compStr;
    var computer = 1 + Math.floor((Math.random()*3));


    if (userChoice === 1 ) {
      userStr = "Rock";
    }
      else if (userChoice === 2) {
        userStr = "Paper";
      }
        else if (userChoice === 3) {
          userStr = "Scissors";
        }
          else {
            console.log("Selection not valid");
          }


    if (computer === 1 ) {
      compStr = "Rock";
    }
      else if (computer === 2) {
        compStr = "Paper";
      }
        else {
          compStr = "Scissors";
        }

    game = (3 + userChoice - computer) % 3;
    switch (game) {
      case 0:
        console.log("User: " + userStr);
        console.log("Computer: " + compStr);
        console.log("Tie");
        break;
      case 1:
        console.log("User: " + userStr);
        console.log("Computer: " + compStr);
        console.log("User Wins");
        break;
      case 2:
        console.log("User: " + userStr);
        console.log("Computer: " + compStr);
        console.log("Computer Wins");
        break;
      }
}

RockPaperScissors(2);



Rock, paper, scissors - rock beats scissors, scissors cut paper,
paper covers rock.
