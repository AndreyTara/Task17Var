
const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
	const xStr = prompt('Enter first number.');
	const yStr = prompt('Enter second number.');
	const signStr = prompt('Enter math sign(+ , - , * , / , % , ^ )');
	const x = +xStr;
	const y = +yStr;
	function doMath(x, y, znak) {
		const wrongMassageX = 'Incorrect input x'
		const wrongMassageY = 'Incorrect input y'
		const wrongMassageSign = 'Incorrect input sign'
		const isXNumber = !isNaN(x) && !isNaN(parseFloat(x));
		const isYNumber = !isNaN(y) && !isNaN(parseFloat(y));
		if (!isXNumber) { return alert(wrongMassageX) };
		if (!isYNumber) { return alert(wrongMassageY) };
		if ((znak === '/') && (y === 0)) { return alert('На нуль ділити не можна') };
		if ((znak === '%') && (y === 0)) { return alert('На нуль ділити не можна') };
		if (znak === '^') {
			const isZnakXY = x ** y
			if (isZnakXY === NaN) return console.log('Invalid input')
		};
		arraySign = [{ sign: '+', funct: x + y },
		{ sign: '-', funct: x - y },
		{ sign: '*', funct: x * y },
		{ sign: '/', funct: x / y },
		{ sign: '%', funct: x % y },
		{ sign: '^', funct: x ** y },
		];
		const isSignValid = arraySign.findIndex((value) => value.sign === znak) !== -1;
		if (!isSignValid) return alert(wrongMassageSign);
		let temp = arraySign.filter((value) => value.sign === znak);
		const result = temp[0].funct
		// alert(`${x} ${znak} ${y} = ${result}`);
		return result;
	}
	const asd = doMath(x, y, signStr);
	if (asd) { return alert(asd) };
}

// function doMathSecond(x, y, znak) {
// 	if (znak === '+') {
// 		return x + y
// 	} else if (znak === '-') {
// 		return x - y
// 	} else if (znak === '*') {
// 		return x * y
// 	} else if (znak === '/') {
// 		if (y === 0) return alert('На нуль ділити не можна.');
// 		return x / y
// 	} else if (znak === '%') {
// 		if (y === 0) return alert('На нуль ділити не можна.');
// 		return x % y
// 	} else if (znak === '^') {
// 		if ((x ** y === NaN)) return alert('Invalid value');
// 		return x ** y;
// 	} else {
// 		alert('математична операція не обрана')
// 	}

// }