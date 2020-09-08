'use strict';

const arrayShift = require('../challenges/arrayShift/array-shift.js');


describe('arrayShift()', () => {
  it('it returns correct values', ()=> {
      let input1 = [2,5,4,6]; 
      let input2 = [2,5,6,4,6]; 
    expect(arrayShift.arrayShift(input1, 9)).toEqual([2,5,9,4,6]);
    expect(arrayShift.arrayShift(input2, 9)).toEqual([2,5,6,9,4,6]);
  });
});
