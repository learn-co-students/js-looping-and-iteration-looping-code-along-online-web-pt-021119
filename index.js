// Code your solutions in this file

function writeCards(array, b) {
  let cards = []
  for (var i = 0; i < array.length; i++) {
    cards.push(`Thank you, ${array[i]}, for the wonderful ${b} gift!`);
  }
  return cards;

}


function countdown(a) {
  while (a >= 0) {
    console.log(a--);
  }
}
