describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2,3,4,5]) ).toEqual( [[1,2,3], [4,5]] );
  });
  it('is able to split an array into two halves', function() {
    expect( split([1,2,3,4,5,6]) ).toEqual( [[1,2,3], [4,5,6]] );
  });
}); 


describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([1,2,3],[10,11,12]) ).toEqual( [1,2,3,10,11,12]);
  });
   it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([10,11,12],[1,2,3]) ).toEqual( [1,2,3,10,11,12]);
  });
   it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([11,15,16,19],[10,12,20]) ).toEqual( [10,11,12,15,16,19,20]);
  });
});

describe('Merge Sort Recursively', function(){
	it ('takes an unordered array of an even length and orders it', function(){
		expect (mergeSort( [5, 4, 3, 2, 1] )).toEqual( [1, 2, 3, 4, 5] );
	});
	it ('takes an unordered array of an odd length and orders it', function(){
		expect (mergeSort( [5, 4, 3, 2] )).toEqual( [2, 3, 4, 5] );
	});
	it ('takes a very unsorted array of an odd length and orders it', function(){
		expect (mergeSort( [82, 46, 49, 20, 68, 14, 61] )).toEqual( [14, 20, 46, 49, 61, 68, 82] );
	});

});