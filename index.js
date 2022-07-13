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
  console.log(cards);
  
  const i_firstCard=Math.floor(Math.random() * cards.length);
  const firstCard=cards[i_firstCard];
  cards.splice(i_firstCard, 1);
  console.log(cards);
  
  const i_secondCard=Math.floor(Math.random() * cards.length);
  const secondCard=cards[i_secondCard];
  cards.splice(i_secondCard, 1);
  console.log(cards);
  
  selectedCards.push(firstCard);
  selectedCards.push(secondCard);

  console.log("Cards: "+ selectedCards);
  console.log("Sum: " + sumCards(selectedCards));
  
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
  readline.question("Do you want to draw a card? (Y/N): ", function(answerIn){
      answer = answerIn;
      readline.close();
      switch(answer){
        case "Y":
          console.log("Draw the card...");
 let i_newCard=Math.floor(Math.random() * cards.length);
  let newCard=cards[i_newCard];
  selectedCards.push(newCard);



gamestatus();

          
          break;
        case "N":
          console.log("Ok, game finished.");
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
  console.log("Cards: "+ selectedCards);
  console.log("Sum: " + sumCards(selectedCards));
if ( sumCards(selectedCards) == 21){

console.log("Blackjack!!! \n  You won the game with perfect Score");
  newgame();
}
  if(sumCards(selectedCards) < 21 && sumCards(selectedCards) >= 18){
    console.log("Blackjack!!! \n You won the game");
  newgame();
  }

  if(sumCards(selectedCards) < 18 ){
        console.log("Continue.")
drawCard();
  }

  if(sumCards(selectedCards) > 21 ){
    console.log("Sorry, you lose.")
  }

}
function newgame(){
  totalgamecounter =+ 1; 
  let selectedCards=[]; //First and second card -randomly. And then add with a draw function
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



console.log("Blackjack");
console.log("Feeling with luck? - Give it a try~~");
startGame();
