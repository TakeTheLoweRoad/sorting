describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one item', function(){
    expect( bubbleSort(['hi!']) ).toEqual( ['hi!'] );
  });

  it('handles an array with multiple items', function(){
    expect( bubbleSort([2, 860, 43, 21, 1]) ).toEqual( [1, 2, 21, 43, 860] );
  });

});