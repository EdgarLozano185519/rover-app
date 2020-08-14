# CG Homework: A Rover App
## Problem
### Description
A squad of robotic rovers are to be landed by NASA on a plateau on Mars.
This plateau, which is curiously rectangular, must be navigated by the
rovers so that their on-board cameras can get a complete view of the
surrounding terrain to send back to Earth.

A rover's position and location is represented by a combination of x
and y coordinates and a letter representing one of the four cardinal
compass points. The plateau is divided up into a grid to simplify
navigation. An example position might be 0, 0, N, which means the
rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters.
The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover
spin 90 degrees left or right respectively, without moving from its
current spot. 'M' means move forward one grid point, and maintain the
same heading.

Assume that the square directly North from (x, y) is (x, y+1).

### Input

The first line of input is the upper-right coordinates of the plateau,
the lower-left coordinates are assumed to be (0, 0).

The rest of the input is information pertaining to the rovers that
have been deployed. Each rover has two lines of input. The first line
gives the rover's position, and the second line is a series of
instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by
spaces, corresponding to the x and y coordinates and the rover's
orientation.

Each rover will be finished sequentially, which means that the second
rover won't start to move until the first one has finished moving.

### Output

The output for each rover should be its final coordinates and heading.

### Input and output files
#### Test Input:
```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```
#### Expected Output:
```
1 3 N
5 1 E
```
### Additional Requirements:
Build a CG branded web front end to support your project.  This front
end should provide the following:
An upload form to upload the input file to be processed.
Display the results of processing the input on screen.
Optional:  Add animation or other visualization of the simulation of each input.
Ease of usage and good documentation on how to run the solution are expected.   
### Tips

- Everything you do is going to be evaluated.
- You should provide sufficient evidence that your solution is
complete by, as a minimum, indicating that it works correctly against
the supplied test data.
- Tests are more than welcome.
- You can document your assumptions for this challenge.

## Solution
### Assumptions
An assumption is made that if a rover tries to move beyond limits of specified map, it will not move.
The upload form assumes a text file. It does not handle the "no file" case gracefully.
### How to Run
Node version 12.18.3 and NPM version 6.14.7 were used to run this application.
The application makes use of the Formidable library and Jest library for testing.
First run `npm install` to install dependencies (Jest and Formidable).
To run the application, use `npm start` command.
There are some tests provided. To run the tests, run `npm test` command.
### Structure
The index.js file is the entry point for the application. It initiates a server, and handles minimal webpage rendering and uploading of file.
There is also Rover.js and functions.js files. The functions.js file is where the file is parsed and handles rover positioning.
The Rover.js file contains a Rover class with a few helper functions, and a main getPosition function.
Some standard documentation comments are left to inform of what each function does, its parameters, and return information.
### Testing
There are tests provided for Rover.js and functions.js files.
Jest was used to run these tests. In the package.json file, jest is configured to collect coverage information. Therefore, an extra directory with this information is generated.
## Final Thoughts
This was a fun project. I realize webpage is very trivial, but I focused on the logic more than rendering. I would be happy to discuss.

Thanks

Edgar
