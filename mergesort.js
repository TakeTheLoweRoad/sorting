function split(wholeArray) {
	var middleIndex = Math.ceil(wholeArray.length/2);
	var firstHalf = wholeArray.slice(0,middleIndex);
	var secondHalf = wholeArray.slice(middleIndex);
	console.log(firstHalf);
	return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
	var outputArr = [];
	var newElm;
	while (arr1.length>0 && arr2.length>0){
		if (arr1[0]<arr2[0]){
			newElm = arr1.shift();
		}else {
			newElm = arr2.shift();}
		outputArr.push(newElm);	
	}
	if (arr1.length > 0){
		outputArr = outputArr.concat(arr1);
	} 
	if (arr2.length > 0){
		outputArr = outputArr.concat(arr2);
	}


	return outputArr;
}

function mergeSort(array){
	var toSplit = split(array);
	var finalArr = [];
	var firstHalf = toSplit[0];
	var secondHalf = toSplit[1];
	// base case
	if (firstHalf.length === 1)
	{
		finalArr = merge(firstHalf, secondHalf);
	}
	// recursive case
	else
	{
		finalArr = merge(mergeSort(firstHalf), mergeSort(secondHalf));
	}
	return finalArr;
}



