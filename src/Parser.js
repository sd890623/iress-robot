export default class Parser {
  static get PLACE() {
    return 'PLACE';
  }
  static get MOVE() {
    return 'MOVE';
  }
  static get LEFT() {
    return 'LEFT';
  }
  static get RIGHT() {
    return 'RIGHT';
  }
  static get REPORT() {
    return 'REPORT';
  }

 static parseInput(input) {
    const upperCaseInput = input.toUpperCase();
    if (upperCaseInput.includes(`${Parser.PLACE} `)) {
      return Parser.PLACE;
    } else if (upperCaseInput.includes(Parser.MOVE)) {
      return Parser.MOVE;
    } else if (upperCaseInput.includes(Parser.LEFT)) {
      return Parser.LEFT;
    } else if (upperCaseInput.includes(Parser.RIGHT)) {
      return Parser.RIGHT;
    } else if (upperCaseInput.includes(Parser.REPORT)) {
      return Parser.REPORT;
    } else {
      return null;
    }
  }

  static parsePlace(input) {
    const directions = ['N', 'S', 'W', 'E'];
    const upperCaseInput = input.toUpperCase();
    const positionAndArgs = upperCaseInput.split(' ');
    if (!positionAndArgs[1] || !positionAndArgs[1].includes(',')) {
      return null;
    }
    const args = positionAndArgs[1].split(',');
    const axisX = parseInt(args[0], 10);
    const axisY = parseInt(args[1], 10);
    const direction = args[2];
    if (axisX !== NaN && axisY !== NaN && directions.includes(direction)) {
      return { position: { x: axisY, y: axisY }, direction };
    } else {
      return null;
    }
  }
}
