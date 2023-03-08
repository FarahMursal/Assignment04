function playRPS() {
    let userChoice = prompt("Choose rock, paper, or scissors.");
  
    
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
      computerChoice = "rock";
    } else if (computerChoice === 1) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
  
    
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
      alert("Invalid choice. Please choose rock, paper, or scissors.");
      return;
    }
  
    
    let winner;
    if (userChoice === "rock") {
      if (computerChoice === "rock") {
        winner = "tie";
      } else if (computerChoice === "paper") {
        winner = "computer";
      } else {
        winner = "user";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        winner = "user";
      } else if (computerChoice === "paper") {
        winner = "tie";
      } else {
        winner = "computer";
      }
    } else { 
      if (computerChoice === "rock") {
        winner = "computer";
      } else if (computerChoice === "paper") {
        winner = "user";
      } else {
        winner = "tie";
      }
    }
  
    
    if (winner === "user") {
      alert(`You win! ${userChoice} beats ${computerChoice}.`);
    } else if (winner === "computer") {
      alert(`Computer wins! ${computerChoice} beats ${userChoice}.`);
    } else {
      alert(`It's a tie! Both players chose ${userChoice}.`);
    }
  }