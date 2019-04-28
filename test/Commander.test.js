import Commander from '../src/Commander';

describe('Commander', () => {
  it('test setPosition, isPositionLegal and getPosition', () => {
    let commander = new Commander();
    let status = commander.setPosition({ x: -1, y: 4 });
    expect(status).toBeFalsy();

    commander = new Commander();
    status = commander.setPosition({ x: 0, y: 5 });
    expect(status).toBeFalsy();

    commander = new Commander();
    status = commander.setPosition({ x: 0, y: 4 });
    expect(status).toBe(true);
    expect(commander.getPosition()).toEqual({ x: 0, y: 4 });
  });

  it('test setFacing and getFacing', () => {
    let commander = new Commander();
    let status = commander.setFacing(2);
    expect(status).toBeFalsy();

    commander = new Commander();
    status = commander.setFacing('S');
    expect(status).toBe(true);
    expect(commander.getFacing()).toBe(2);
  });

  it('test left and right and get readible facing', () => {
    let commander = new Commander();
    commander.setFacing('N');
    commander.left();
    expect(commander.getFacing()).toBe(3);
    expect(commander.convertIntFacingToWord()).toBe('WEST');

    commander.right();
    commander.right();
    expect(commander.getFacing()).toBe(1);
    expect(commander.convertIntFacingToWord()).toBe('EAST');
  });

  it('test move', () => {
    let commander = new Commander();
    commander.setPosition({ x: 0, y: 0 });
    commander.setFacing('N');
    commander.left();
    let status = commander.move();
    expect(status).toBeFalsy();

    commander.left();
    status = commander.move();
    expect(status).toBeFalsy();

    commander.left();
    status = commander.move();
    expect(status).toBe(true);
    expect(commander.getPosition()).toEqual({ x: 1, y: 0 });
    expect(commander.getFacing()).toBe(1);

    commander.setPosition({ x: 2, y: 2 });
    commander.setFacing('E');

    commander.move();
    status = commander.move();
    expect(status).toBe(true);
    status = commander.move();
    expect(status).toBeFalsy();
  });

  it('test reports', () => {
    let commander = new Commander();
    commander.setPosition({ x: 3, y: 4 });
    commander.setFacing('S');

    let reports = commander.getReport();
    expect(reports).toBe('position: { x: 3, y: 4, facing: SOUTH }');
  });
});
