//your code here
function fn1(){
	let max =20;
	let min = -20;
	let randomNum = Math.random()*(max - min)+min;
	let n =Math.floor(randomNum);
	document.getElementById('num').innerText = n;
	let guessnum = document.getElementById('guess');
	if(guessnum.value>min&&guessnum.value<max){
		document.getElementById("respond").innerText="Hot";
	}
	else{
		document.querySelector("#respond").innerText="Cold";
	}
}
