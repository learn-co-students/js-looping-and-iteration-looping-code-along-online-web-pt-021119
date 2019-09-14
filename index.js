// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];

function writeCards(names, celebration){
  let newArray = [];

  for(let counter = 0; counter < names.length; counter++){
    newArray.push(`Thank you, ${names[counter]}, for the wonderful ${celebration} gift!`)
  }
  return newArray;
}

function countdown(number){
  let i = number;
  while (i >= 0){
    console.log(i);
    i--;
  }
}
