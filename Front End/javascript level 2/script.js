
// this is the console version of the game.
    class Player {
    constructor() {
      this.name = prompt("Please enter your name:");
      this.age = prompt("Please enter your age:");
      this.occupation = prompt("Please enter your occupation:");
      this.contryOfResidence = prompt("Please enter your country of residence:");
      this.chances = 4;
    }
    play() {
        while (this.chances > 0) {
          const guess = parseInt(prompt("Guess a number between 1 and 10:"));
    
          if (guess === randomNumber) {
            console.log("Congratulations! You guessed correctly.");
            return;
          } 
          else {
            this.chances--;
            console.log(`Incorrect. You have ${this.chances} chances remaining.`);
          }
        }
      
        console.log("Sorry, you ran out of chances.");
  
      }    
  }
  
  const player1 = new Player();
  

  console.log(`Name: ${player1.name}`);
  console.log(`Age: ${player1.age}`);
  console.log(`Gender: ${player1.occupation}`);
  console.log(`Gender: ${player1.countryOfResidence}`);

  const player2 = new Player();

  console.log(`Name: ${player2.name}`);
  console.log(`Age: ${player2.age}`);
  console.log(`Gender: ${player2.occupation}`);
  console.log(`Gender: ${player2.countryOfResidence}`);

const randomNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 100
console.log(randomNumber); // Output: a random number between 1 and 100
  
    
  
  
  // Start the game
  player1.play();
  player2.play();


 