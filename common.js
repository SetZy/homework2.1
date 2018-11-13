var ar = [9,0,1,0,9];

console.log(ar);

var findW = function(){

	var arTop = [];
	var sum = 0;
	var minTop = 0;

	for(var i = 0; i < ar.length; i++){
		if(	((ar[i] >= ar[i + 1] && (i + 1) <= ar.length) || ((i === ar.length - 1) && ar[i] >= ar[i - 1])) && ((ar[i - 1] <= ar[i] && (i - 1) >= 0) || i === 0) ) {
			arTop.push(i);
		}
		for(var h = 1; h < ar.length; h++) {
			if(ar[i + h] >= ar[i]) {
				i = i + h - 1;
			break;
			}
		}
	}	
	for (var i = 0; i < arTop.length - 1; i++){
		if(ar[arTop[i]] < ar[arTop[i + 1]]){
			minTop = arTop[i];
		}else{
			minTop = arTop[i + 1]
		}
		for(var j = arTop[i] + 1; j < arTop[i + 1]; j++){
			sum += ar[minTop] - ar[j]; 
		}
	}
	console.log("The number of elements filled with woter: " + sum);
}

findW(ar)
