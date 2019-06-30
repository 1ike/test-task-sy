import sumBigInt from '../src/index';


describe('sumBigInt', () => {
  test("it's alive!", () => {
    expect(sumBigInt('1', '2')).toBe('3');
  });

  const errorText = 'Work only with positive Int.';
  test(errorText, () => {
    expect(() => sumBigInt('-1', '2')).toThrowError(errorText);
    expect(() => sumBigInt('1', '-2')).toThrowError(errorText);
    expect(() => sumBigInt('0', '2')).toThrowError(errorText);
    expect(() => sumBigInt('1', '0')).toThrowError(errorText);
  });
});
