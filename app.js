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

const handleLineInput = (val) => {

  const parsedInput = Parser.parseInput(val);
  switch (parsedInput) {
    case Parser.PLACE:
      const positionAndFacing = Parser.parsePlace(val);
      if (positionAndFacing) {
        commander = new Commander(robot, table);
        commander.setPosition(positionAndFacing.position);
        commander.setFacing(positionAndFacing.facing);
        console.log('Position and facing set.');
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
    case Parser.REPORT:
      console.log(commander.getReport());
      break;
    default:
      console.log('Illegal instructions received.')
  }
}

console.log('Welcome to toy robot command line, plz input your instructions');
rl
.on('line', handleLineInput)
.on('close', ()=> {
  console.log('Thanks for playing');
  process.exit(0);
})
