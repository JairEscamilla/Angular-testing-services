import { Calculator } from './calculator';

// ng test --no-watch --code-coverage

describe('Test for calculator', () => {
  describe('Test for multiply', () => {
    it('should return a nine', () => {
      // AAA
      // Arrange
      const calculator = new Calculator();
      // Act
      const rta = calculator.multiply(3, 3);
      // Assert
      expect(rta).toEqual(9);
    });
  });

  describe('Tests for divide', () => {
    it(' should return some numbers', () => {
      const calculator = new Calculator();
      expect(calculator.divide(6, 3)).toEqual(2);
      expect(calculator.divide(5, 2)).toEqual(2.5);
    });
    it('#divide for a zero', () => {
      const calculator = new Calculator();
      expect(calculator.divide(6, 0)).toBeNull();
    });
  });

  it('test matchers', () => {
    const name = 'Jair';
    let name2;

    expect(name).toBeDefined();
    expect(name2).toBeUndefined();

    expect(3 === 3).toBeTruthy();
    expect('1233456').toMatch(/123/);
    expect(['apple', 'oranges', 'pears']).toContain('oranges');
  });
});
