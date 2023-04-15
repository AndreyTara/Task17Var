
const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
	const xStr = prompt('Enter first number.');
	const yStr = prompt('Enter second number.');
	const signStr = prompt('Enter math sign(+ , - , * , / , % , ^ )');

	function doMath(x, y, znak) {
		const wrongMassageX = 'Incorrect input x'
		const wrongMassageY = 'Incorrect input y'
		const wrongMassageSign = 'Incorrect input sign'
		const isXNumber = !isNaN(x) && !isNaN(parseFloat(x));
		const isYNumber = !isNaN(y) && !isNaN(parseFloat(y));
		if (!isXNumber) return console.log(wrongMassageX);
		if (!isYNumber) return console.log(wrongMassageY);
		if ((y === 0) && (znak === '/')) { return console.log('На нуль ділити не можна') };
		if ((y === 0) && (znak === '%')) { return console.log('На нуль ділити не можна') };
		// const isZnak = (znak === '^') && ((x < 0) && (y < 0))
		// if (isZnak) return console.log('В результате будет НаН');
		arraySign = [{ sign: '+', funct: x + y },
		{ sign: '-', funct: x - y },
		{ sign: '*', funct: x * y },
		{ sign: '/', funct: x / y },
		{ sign: '%', funct: x % y },
		{ sign: '^', funct: x ** y },
		];
		const isSignValid = arraySign.findIndex((value) => value.sign === znak) !== -1;
		if (!isSignValid) return console.log(wrongMassageSign);
		let temp = arraySign.filter((value) => value.sign === znak);
		const result = temp[0].funct
		console.log(`${x} ${znak} ${y} = ${result}`);
		return result;
	}
	const asd = doMath(+xStr, +yStr, signStr);
	console.log(asd);
}

function doMathSecond(x, y, znak) {
	if (znak === '+') {
		return x + y
	} else if (znak === '-') {
		return x - y
	} else if (znak === '*') {
		return x * y
	} else if (znak === '/') {
		if (y === 0) return console.log('На нуль ділити не можна.');
		return x / y
	} else if (znak === '%') {
		if (y === 0) return console.log('На нуль ділити не можна.');
		return x % y
	} else if (znak === '^') {
		if ((x < 0) && (y < 0)) return console.log('В результате будет НаН');
		return x ** y;
	} else {
		console.log('математична операція не обрана')
	}

}