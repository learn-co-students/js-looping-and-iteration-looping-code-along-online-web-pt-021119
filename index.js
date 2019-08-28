function writeCards(names, event) {
  const new_array = [];
   for (let count = 0; count < names.length; count++) {
    new_array.push(`Thank you, ${names[count]}, for the wonderful ${event} gift!`);
  }
     return new_array;
};
function countdown() {
  let counter = 10
  while(counter >= 0) {
    console.log(counter)
    counter--
  }
  return counter
}
