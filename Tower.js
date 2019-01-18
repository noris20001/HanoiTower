'use strict';
function tower(){
	let stackA = new Stack();
	let stackB = new Stack();
	let stackC = new Stack();
	let i = 3;
	runHanoi(i, stackA, stackB, stackC);
	}
	function runHanoi(Z, A, B, C, num){
	if(Z === 1){
		move(A,B);
		num++;
		
	}else{
		runHanoi(z-1, A, C, B);
		move(A, B);
		num++;
		runHanoi(z-1, C, B, A);
	}
	B.push(A.pop().content);
	}