var ar = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
var arTop = [];
var sum = 0;
var minTop = 0;
console.log(ar);
for(var i = 0; i < ar.length; i++){
	var b1 = (ar[i] >= ar[i + 1] && (i + 1) <= ar.length);
	var b2 =((i == ar.length - 1) && ar[i] >= ar[i - 1]);
	var b3 = ((ar[i - 1] <= ar[i] && (i - 1) >= 0) || i == 0);
	
	if(	(b1 || b2) && b3 ){
		arTop.push(i);
	}
	
	var h = 0;
	while(true)
	{
		if(h++ > ar.length)
			break;
		if(ar[i + h] > ar[i])
		{
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
console.log(sum);
