
const {sum, divide} = require('./counter');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('divie 2 / 2 to equal 1', () => {
    expect(divide(2, 2)).toBe(1);
  });
  test('divie 4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2);
  });

