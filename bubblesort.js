var bubbleSort = function(array){

	var count;

	do {
		count = 0;
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i+1])
			{
				var temp1 = array[i];
				var temp2 = array[i+1];
				array[i] = temp2;
				array[i+1] = temp1;
				count++;
			}
		}
	}
	while (count > 0);

	return array;
}