import Robot from './src/Robot';
import Table from './src/Table';
import Commander from './src/Commander';
import Parser from './src/Parser';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const robot = new Robot();
const table = new Table();
let commander = null;

export const processCommander = (val, commander) => {
  const parsedInput = Parser.parseInput(val);
  let status = false;
  switch (parsedInput) {
    case Parser.PLACE:
      const positionAndFacing = Parser.parsePlace(val);
      if (positionAndFacing) {
        let newCommander = new Commander(robot, table);
        status = newCommander.setPosition(positionAndFacing.position);
        if (!status) {
          console.log('The robot is put to illegal position.');
          break;
        }
        newCommander.setFacing(positionAndFacing.direction);
        console.log('Position and facing set.');
        commander = newCommander;
      } else {
        console.log('Illegal Place Instructions.');
      }
      break;
    case Parser.MOVE:
      if (commander) {
        const status = commander.move();
        if (status) {
          console.log('Moved');
        } else {
          console.log('Did not move');
        }
      }
      break;
    case Parser.LEFT:
      if (commander) {
        commander.left();
        console.log('Rotated left');
      }
      break;
    case Parser.RIGHT:
      if (commander) {
        commander.right();
        console.log('Rotated right');
      }
      break;
    case Parser.REPORT:
      if (commander) {
        console.log(commander.getReport());
      }
      break;
    default:
      console.log('Illegal instructions received.')
  }
  return commander;
}

const handleInput = (val) => {
  commander = processCommander(val, commander);
}

console.log('Welcome to toy robot command line, plz input your instructions');

rl
.on('line', handleInput)
.on('close', ()=> {
  console.log('Thanks for playing');
  process.exit(0);
})
