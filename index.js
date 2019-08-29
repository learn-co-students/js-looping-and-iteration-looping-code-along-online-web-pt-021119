function writeCards(names, event){
	let a = []
	for(let i = 0; i < names.length; i++){
		a.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
	}
	return a
}

function countdown(number) {
	let i = 0
	while (i <= number) {
		console.log(number-i)
		i++
	}
}