var Rover = require('./Rover');

describe('Rover class', () => {
  test('It should turn east', () => {
  let rover = new Rover("0 0 N", "RM", ["5", "5"]);
  let position = rover.getPosition();
    expect(position).toEqual("1 0 E");
  });

  test('It should respect X upper boundary', () => {
    rover = new Rover("0 0 N", "RMMMMMM", ["5", "5"]);
    expect(rover.getPosition()).toEqual("5 0 E");
  });

  test('It should respect Y upper boundary', () => {
    rover = new Rover("0 0 N", "MMMMMM", ["5", "5"]);
    expect(rover.getPosition()).toEqual("0 5 N");
  });

  test('It should respect Y lower boundary', () => {
    rover = new Rover("0 0 S", "MMMMMM", ["5", "5"]);
    expect(rover.getPosition()).toEqual("0 0 S");
  });

  test('It should respect X lower boundary', () => {
    rover = new Rover("0 0 W", "MMMMMM", ["5", "5"]);
    expect(rover.getPosition()).toEqual("0 0 W");
  });
});

