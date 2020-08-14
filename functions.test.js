var getRoverMovement = require('./functions');

describe('getRoverMovement function', () => {
  test('it should move correctly', () => {
    let test = getRoverMovement(`5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`);
    expect(test).toEqual(['1 3 N', '5 1 E']);
  });

  test('it should return empty array', () => {
    let test = getRoverMovement(``);
    expect(test).toEqual([]);
  });

  test('it should still return empty array because formatting is wrong', () => {
    let test = getRoverMovement(`5 5
1 2 A
RMRM`);
    expect(test).toEqual([]);
  });
});
