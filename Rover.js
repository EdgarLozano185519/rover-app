/** Class defining a rover */
class Rover {
  /**
   * @param {!Array} position Holds array of x, y, and facing direction
   * @param {string} movement A string of characters indicating left, right, or move
   * @param {!Array<string>} bounds An array containing x and y numbers as strings
  */
  constructor(position, movement, bounds) {
    let temp = position.split(' ');
    this.direction = temp[2];
    this.position = [parseInt(temp[0],10), parseInt(temp[1],10)];
    this.movement = movement;
    this.bounds = [parseInt(bounds[0],10), parseInt(bounds[1],10)];
  }

  /**
   * Internal function that turns the rover. This can be used externally, but better to use getPosition
   * @param {char} direction One of L or R characters to be used to turn rover
  */
  turn = (direction) => {
    if(this.direction === 'N') {
      if(direction === 'L') this.direction='W';
      else if(direction==='R') this.direction='E';
    }
    else if(this.direction === 'E') {
      if(direction === 'L') this.direction='N';
      else if(direction==='R') this.direction='S';
    }
    else if(this.direction === 'S') {
      if(direction === 'L') this.direction='E';
      else if(direction==='R') this.direction='W';
    }
    else if(this.direction === 'W') {
      if(direction === 'L') this.direction='S';
      else if(direction==='R') this.direction='N';
    }
  }

  /**
   * Checks to see if a number given is in bounds of a 2d map
   * @param {number} num The number to check whether it is in the bounds
   * @return {boolean} True if in bound, and false if not
  */
  isInBound = (num) => {
    if(
      num >= 0 &&
      num <= this.bounds[0] &&
      num <= this.bounds[1]
    )
      return true;
    return false;
  }

  /**
   * A function used to move rover 1 unit depending on direction facing
  */
  move = () => {
    if(this.direction === 'N' && this.isInBound(this.position[1]+1)) this.position[1] += 1;
    else if(this.direction === 'E' && this.isInBound(this.position[0]+1)) this.position[0] += 1;
    else if(this.direction === 'S' && this.isInBound(this.position[1]-1)) this.position[1] -= 1;
    else if(this.direction === 'W' && this.isInBound(this.position[0]-1)) this.position[0] -= 1;
  }

  /**
   * The main function to be used to calculate position.
   *  This uses information provided in the constructor
   * @return {string} A string indicating rover's final position in the form "x y direction"
  */
  getPosition = () => {
    for(let i = 0; i < this.movement.length; i++) {
      if(this.movement[i] === 'M') this.move();
      else this.turn(this.movement[i]);
    }
    this.position.push(this.direction);
    return this.position.join(' ');
  }
}

module.exports = Rover;
