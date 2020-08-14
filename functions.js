var Rover = require('./Rover');

/**
 * Only function in this file used to parse file and return positions.
 * File must be formatted correctly.
 * @param {string} fileString A string containing line breaks as parsed from a file
 * @return {~Array<string>} Array of strings dependent on number of rovers specified in file
*/
const getRoverMovement = (fileString) => {
  // fileString is variable containing string from text file
  // Splitting lines into an array here
  let linesArray = fileString.split(/\r?\n/);

  // Check if formatting is ok
  if(
    !linesArray.length ||
    linesArray.length === 1 ||
    linesArray.length%2===0 ||
    !linesArray[0].match(/^[0-9]+ [0-9]+$/)
  )
    return [];
  for(let i = 1; i < linesArray.length-1; i+=2) {
    if(
      !linesArray[i].match(/^[0-9]+ [0-9]+ [NESW]$/) ||
      !linesArray[i+1].match(/^[LRM]+[LRM]?$/)
    )
      return [];
  }

  // Get max map size
  let bounds = linesArray[0].split(' ');

  // Time to move the rovers
  let finalPositions = [];
  for(let i = 1; i < linesArray.length-1; i+=2) {
    let rover = new Rover(linesArray[i], linesArray[i+1], bounds);
    finalPositions.push(rover.getPosition());
  }
  return finalPositions;
};

module.exports = getRoverMovement;
