import readline from 'readline';
import Robot from './Robot';
import Table from './Table';
import Commander from './Commander';
import Parser from './Parser';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let commanderInstance = null;

const processCommander = (val, commander) => {
  const parsedInput = Parser.parseInput(val);
  let status = false;
  switch (parsedInput) {
    case Parser.PLACE: {
      const positionAndFacing = Parser.parsePlace(val);
      if (positionAndFacing) {
        const newCommander = new Commander();
        status = newCommander.setPosition(positionAndFacing.position);
        if (!status) {
          console.log('The robot is put to illegal position.');
          break;
        }
        newCommander.setFacing(positionAndFacing.direction);
        console.log('Position and facing set.');
        return newCommander;
      } else {
        console.log('Illegal Place Instructions.');
      }
      break;
    }
    case Parser.MOVE:
      if (commander) {
        status = commander.move();
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
      console.log('Illegal instructions received.');
  }
  return commander;
};

const handleInput = (val) => {
  commanderInstance = processCommander(val, commanderInstance);
};

console.log('Welcome to toy robot command line, plz input your instructions');

rl
  .on('line', handleInput)
  .on('close', () => {
    console.log('Thanks for playing');
    process.exit(0);
  });

export default processCommander;
