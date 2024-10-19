import { fibonacci } from '../src/fibonacci';

describe('Fibonacci Function', () => {
  test('should return 0 for fibonacci(0)', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('should return 1 for fibonacci(1)', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('should return 1 for fibonacci(2)', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('should return 2 for fibonacci(3)', () => {
    expect(fibonacci(3)).toBe(2);
  });

  test('should return 3 for fibonacci(4)', () => {
    expect(fibonacci(4)).toBe(3);
  });

  test('should return 5 for fibonacci(5)', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('should throw an error for negative numbers', () => {
    expect(() => fibonacci(-1)).toThrow('Input must be a non-negative integer.');
  });
});
