import Parser from '../src/Parser';

describe('Parser', () => {
  it('test parseInput and find category', () => {
    let input = '';
    let parsedInput = Parser.parseInput(input);
    expect(parsedInput).toBe(null);
  });
})
