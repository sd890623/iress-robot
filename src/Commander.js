import Table from './Table';

export default class Commander {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.facing = 0;
  }

  static isPositionLegal(position) {
    if (position.x < 0 || position.y < 0) {
      return false;
    }
    if (position.x > Table.width - 1 || position.y > Table.height - 1) {
      return false;
    }
    return true;
  }

  setPosition(position) {
    if (Commander.isPositionLegal(position)) {
      this.x = position.x;
      this.y = position.y;
      return true;
    } else {
      return false;
    }
  }

  getPosition() {
    return { x: this.x, y: this.y };
  }

  setFacing(facing) {
    switch (facing) {
      case 'N':
        this.facing = 0;
        break;
      case 'E':
        this.facing = 1;
        break;
      case 'S':
        this.facing = 2;
        break;
      case 'W':
        this.facing = 3;
        break;
      default:
        return false;
    }
    return true;
  }

  getFacing() {
    return this.facing % 4;
  }

  move() {
    const facing = this.facing % 4;
    switch (facing) {
      case 0:
        if (this.y === Table.height - 1) {
          return false;
        }
        this.y += 1;
        break;
      case 1:
        if (this.x === Table.width - 1) {
          return false;
        }
        this.x += 1;
        break;
      case 2:
        if (this.y === 0) {
          return false;
        }
        this.y -= 1;
        break;
      case 3:
        if (this.x === 0) {
          return false;
        }
        this.x -= 1;
        break;
      default:
    }
    return true;
  }

  left() {
    if (this.facing - 1 < 0) {
      this.facing += 3;
    } else {
      this.facing -= 1;
    }
  }

  right() {
    this.facing += 1;
  }

  convertIntFacingToWord() {
    const facing = this.facing % 4;
    switch (facing) {
      case 0:
        return 'WEST';
      case 1:
        return 'EAST';
      case 2:
        return 'SOUTH';
      case 3:
        return 'WEST';
      default:
        return null;
    }
  }

  getReport() {
    return `position: { x: ${this.x}, y: ${this.y}, facing: ${this.convertIntFacingToWord()} }`;
  }
}
