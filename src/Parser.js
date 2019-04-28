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
    } else if (upperCaseInput === Parser.MOVE) {
      return Parser.MOVE;
    } else if (upperCaseInput === Parser.LEFT) {
      return Parser.LEFT;
    } else if (upperCaseInput === Parser.RIGHT) {
      return Parser.RIGHT;
    } else if (upperCaseInput === Parser.REPORT) {
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
    if (!Number.isNaN(axisX) && !Number.isNaN(axisY) && directions.includes(direction)) {
      return { position: { x: axisX, y: axisY }, direction };
    } else {
      return null;
    }
  }
}
