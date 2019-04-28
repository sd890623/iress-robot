import Table from '../src/Table';

export default class Commander {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = 0;
  }

  isPositionLegal(position) {
    if (position.x < 0 || position.y < 0) {
      return false;
    }
    if (position.x > Table.width || position.y > Table.height) {
      return false;
    }
    return true;
  }

  setPosition(position) {
    if (this.isPositionLegal(position)) {
      this.x = position.x;
      this.y = position.y;
    }
  }

  setFacing(facing) {
    switch(facing) {
      case 'N':
        this.direction = 0;
        break;
      case 'E':
        this.direction = 1;
        break;
      case 'S':
        this.direction = 2;
        break;
      case 'W':
        this.direction = 3;
        break;
      default:
    }
  }

  move() {

  }

  getReport() {
    return `${this.x}sadsa`;
  }
}
