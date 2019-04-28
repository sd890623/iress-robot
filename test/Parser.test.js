import Parser from '../src/Parser';

describe('Parser', () => {
  it('test parseInput and find category', () => {
    let input = '';
    let parsedInput = Parser.parseInput(input);
    expect(parsedInput).toBe(null);

    input = 'PLACE';
    parsedInput = Parser.parseInput(input);
    expect(parsedInput).toBe(null);

    input = 'PLACEC 2,2';
    parsedInput = Parser.parseInput(input);
    expect(parsedInput).toBe(null);

    input = 'PLACE 2,2,w';
    parsedInput = Parser.parseInput(input);
    expect(parsedInput).toBe(Parser.PLACE);

    input = 'move';
    parsedInput = Parser.parseInput(input);
    expect(parsedInput).toBe(Parser.MOVE);

    input = 'LEFT';
    parsedInput = Parser.parseInput(input);
    expect(parsedInput).toBe(Parser.LEFT);

    input = 'REPORT';
    parsedInput = Parser.parseInput(input);
    expect(parsedInput).toBe(Parser.REPORT);

    input = 'RIGHT 2,2,W';
    parsedInput = Parser.parseInput(input);
    expect(parsedInput).toBe(null);

    input = 'REPORTT';
    parsedInput = Parser.parseInput(input);
    expect(parsedInput).toBe(null);

    input = 'hello';
    parsedInput = Parser.parseInput(input);
    expect(parsedInput).toBe(null);
  });

  it('test parsePlace to parse the position and facing', () => {
    let input = 'PLACE ';
    let parsedInput = Parser.parsePlace(input);
    expect(parsedInput).toBe(null);

    input = 'PLACE 2,';
    parsedInput = Parser.parsePlace(input);
    expect(parsedInput).toBe(null);

    input = 'PLACE 2,F,w';
    parsedInput = Parser.parsePlace(input);
    expect(parsedInput).toBe(null);

    input = 'PLACE 2,3,s';
    parsedInput = Parser.parsePlace(input);
    expect(parsedInput).toEqual({ "direction": "S", "position": { "x": 2, "y": 3 } });
  });
})
