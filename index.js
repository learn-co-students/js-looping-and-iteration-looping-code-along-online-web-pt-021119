// Code your solutions in this file

let you = ['Lisa', 'Kaitlin', 'Jan'];
let party = "surprise"

function writeCards(you, party) {
  const message = []
 for (let i = 0; i < you.length; i++){
 message.push(`Thank you, ${you[i]}, for the wonderful ${party} gift!`);
}
return message;
}

let num = 10;
function countdown(num) {
  while (num >= 0){
    console.log(num--);
}
}
