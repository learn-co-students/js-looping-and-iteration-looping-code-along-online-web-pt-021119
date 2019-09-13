//  const names = ['Lisa', 'Kaitlin', 'Jan'] 

//  const event = ["surprise"]

 function writeCards(names, event) {
     let celebration = []
     for (let i = 0; i < names.length; i++) {
        celebration.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      }
     return celebration;
 }

 function countdown(count){
     while (count >= 0) {
         console.log(count);
         count -= 1;
     }

 }

 

