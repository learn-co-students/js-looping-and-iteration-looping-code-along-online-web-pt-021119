function writeCards(who, what){
  let thanksArr = [];
  for(let i = 0; i < who.length; i++){
    thanksArr.push(`Thank you, ${who[i]}, for the wonderful ${what} gift!`);
  }
  return thanksArr;
}

function countdown(num){
  while(num >= 0){
    console.log(num);
    num -= 1;
  }
}
