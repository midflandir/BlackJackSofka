let cards =["A","2","3","4","5","6","7","8","9","10","K","Q","J"];
//suit: heart, diamond, ace and clover

//First time: A = 11
//Other times: A = 1
let selectedCards=[]; //First and second card -randomly. And then add with a draw function
let totalgamecounter  = 0;
let sum =0;
let answer ="";

//To get inputs
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});



function startGame(){
  //TO DO: Add the first 2 cards randomly to the user
  //Math.random() - 0 - cards.length

  
  const i_firstCard=Math.floor(Math.random() * cards.length);
  const firstCard=cards[i_firstCard];
  cards.splice(i_firstCard, 1);

  
  const i_secondCard=Math.floor(Math.random() * cards.length);
  const secondCard=cards[i_secondCard];
  cards.splice(i_secondCard, 1);

  
  selectedCards.push(firstCard);
  selectedCards.push(secondCard);

  console.log("Your Cards: " + selectedCards);
  let cardssum  = sumCards(selectedCards)
  console.log("Sum: " + cardssum + " \n");
  
  drawCard();

}
/*
< 21 - Drawing a card, you are still playing
= 21 - Blackjack!
> 21 - Y
*/
/*
function playingGame(){
  if(sum<21){
    //console.log("Do you want to draw a card? (Y/N)"); //Input
    readline.question('Do you want to draw a card? (Y/N)', (opt) => {
      console.log( opt );
      readline.close();
      if (opt == Y){  
      };
    }                
    )  
  } else 
    if(sum===21){
    console.log("Blackjack!");
  } else
    {
    console.log("Sorry, you lose.")
  }
}
*/
function drawCard(){

  readline.question("Do you want to draw a card? (Y/N): \n", function(answerIn) {
      answer = answerIn;
      //readline.close();
    lowanswer = answer.toLowerCase();
      switch(lowanswer){
        case "y":
          console.log("Draw the card...");
 let i_newCard=Math.floor(Math.random() * cards.length);
  let newCard=cards[i_newCard];
  selectedCards.push(newCard);



gamestatus();

          
          break;
        case "n":
gamestatus();
          break;
        default:
          console.log("Invalid input. ");
          break;
      }

    });

}






function sumCards(cards){

  let sum = 0;
  
  for(let i = 0; i < cards.length; i++){
    if(cards[i] === "A") {

      sum += 1;
      
/*
  readline.question("Do you want to sum the A as 1 or 10? (one/ten): \n", function(answerIn) {
      answer = answerIn;

    lowanswer = answer.toLowerCase();
if (lowanswer ==  "one"){
        sum += 1;
            console.log("here one \n")
}
    
if (lowanswer ==  "ten"){
        sum += 10;
            console.log("here ten \n")
}

    });
*/
      
    } else if (cards[i] === "J" || cards[i] === "Q" || cards[i] === "K"){
      sum += 10;
    } else {
      sum += parseInt(cards[i]);
    }
  }

  return sum; 

  cards.forEach(sumEachCard);
  return sum;
}



function gamestatus(){
  console.log("Your Cards: "+ selectedCards);
  let cardssum  = sumCards(selectedCards)
  console.log("Sum: " + cardssum + " \n");
if ( cardssum == 21){

console.log("   Blackjack!!! \n  -----  You won the game with perfect Score  -----  \n  \n");
  newgame();
}
  if(cardssum < 21 && cardssum >= 13){
    console.log("Blackjack!!! \n  -----  You won the game -----  \n  \n");
  newgame();
  }

  if(cardssum < 13 ){

drawCard();
  }

  if(cardssum > 21 ){
    console.log("Sorry, you lose.")
  }

}




function newgame(){



  readline.question("Do you want to draw a card? (Y/N): \n", function(answerIn) {
      answer = answerIn;
      //readline.close();
    lowanswer = answer.toLowerCase();
      switch(lowanswer){
        case "y":
          console.log("Draw the card...");
 let i_newCard=Math.floor(Math.random() * cards.length);
  let newCard=cards[i_newCard];
  selectedCards.push(newCard);
                  case "y":
          console.log("Draw the card...");
 let i_newCard=Math.floor(Math.random() * cards.length);
  let newCard=cards[i_newCard];
  selectedCards.push(newCard);
      }
      });
  
  totalgamecounter =+ 1; 
  
  selectedCards.splice(0,selectedCards.length)
let sum =0;
let answer ="";
cards =["A","2","3","4","5","6","7","8","9","10","K","Q","J"];
startGame();

  
}













function sumEachCard(elem){
    //TO DO: separate what is number and what is letter, and set the corresponding value. regexp + test()

    if(/^[a-zA-z]/.test(elem)){ //if the elem is a letter?
      if(elem === "K" || elem === "Q" || elem ==="J"){
        sum+=10;
        console.log(sum);
      }
      //1. Check if the A card already exists
      //2. sum == 20 , A = 1.
      if( selectedCards.filter(n => n === "A").length === 1 || sum === 20){
        sum+=1;
      }
      sum+=11;


    }
    //At this point it means that it is a number, but it remains as string bc of ""
    sum+=Number(elem);

}



console.log("Blackjack  \n");
console.log("Feeling with luck? - Give it a try~~  \n");
startGame();
