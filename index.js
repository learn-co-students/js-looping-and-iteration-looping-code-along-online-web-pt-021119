function writeCards(namesArray, event){
  let messageArray = [];
  for (let i=0; i < namesArray.length; i++){
    messageArray.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`);
  }
  return messageArray;
}

function countdown(time){
  // let i=time;
  // do {
  //   console.log(i--);
  // } while (i>-1);

  // for (let countdown=time; countdown>-1; countdown--){
  //   console.log(countdown);
  // }

  let countdown=time
  while (countdown>-1){
    console.log(countdown);
    countdown--;
  }
}
