import processCommander from '../src/app';

describe('App processCommander', () => {
  it('should fail illegal inputs', () => {
    let commander = null;
    commander = processCommander('Place 2,2,d', commander);
    expect(commander).toBeNull();

    commander = null;
    commander = processCommander('HELLO', commander);
    expect(commander).toBeNull();

    commander = null;
    commander = processCommander('MOVE', commander);
    expect(commander).toBeNull();
  });

  it('should discard illegal inputs', () => {
    let commander = null;
    commander = processCommander('LEFT', commander);
    expect(commander).toBeNull();
    commander = processCommander('Place 2,2,w', commander);
    expect(commander.getPosition()).toEqual({ x: 2, y: 2 });
    commander = processCommander('HELLO', commander);
    expect(commander.getPosition()).toEqual({ x: 2, y: 2 });
    commander = processCommander('MOVE', commander);
    expect(commander.getPosition()).toEqual({ x: 1, y: 2 });
  });


  it('should pass legal input', () => {
    let commander = processCommander('Place 1,2,W', commander);
    expect(commander.getPosition()).toEqual({ x: 1, y: 2 });
    expect(commander.getFacing()).toBe(3);
  });

  it('should run a successful run', () => {
    let commander = processCommander('Place 2,3,N', commander);
    expect(commander.getPosition()).toEqual({ x: 2, y: 3 });
    expect(commander.getFacing()).toBe(0);

    commander = processCommander('MOVE', commander);
    expect(commander.getPosition()).toEqual({ x: 2, y: 4 });
    commander = processCommander('MOVE', commander);
    expect(commander.getPosition()).toEqual({ x: 2, y: 4 });
    commander = processCommander('RIGHT', commander);
    expect(commander.getPosition()).toEqual({ x: 2, y: 4 });
    expect(commander.getFacing()).toBe(1);
    commander = processCommander('MOVE', commander);
    expect(commander.getPosition()).toEqual({ x: 3, y: 4 });
    commander = processCommander('MOVE', commander);
    expect(commander.getPosition()).toEqual({ x: 4, y: 4 });
    commander = processCommander('MOVE', commander);
    expect(commander.getPosition()).toEqual({ x: 4, y: 4 });

    commander = processCommander('Place 2,0,W', commander);
    expect(commander.getPosition()).toEqual({ x: 2, y: 0 });
    expect(commander.getFacing()).toBe(3);

    commander = processCommander('MOVE', commander);
    expect(commander.getPosition()).toEqual({ x: 1, y: 0 });
  });
});
