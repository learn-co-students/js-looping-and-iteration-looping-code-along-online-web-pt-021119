// Code your solutions in this file
function writeCards(names, event) {
  const array = [];
  for (let i = 0; i < names.length; i++) {
    let card = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    array.push(card);
  }
  return array;
}

function countdown(number) {
  let i = 0
  while (i < (number + 1)) {
    console.log(i);
    i++;
  }
}
