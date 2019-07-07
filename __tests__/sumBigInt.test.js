import sumBigInt, { sumByStrings } from '../index';


describe('sumBigInt', () => {
  test("it's alive!", () => {
    expect(sumBigInt('134', '297980')).toBe('298114');
    expect(sumByStrings('134', '297980')).toBe('298114');
    expect(sumByStrings('534', '789')).toBe('1323');
    expect(sumBigInt('2', `${Number.MAX_SAFE_INTEGER}`)).toBe('9007199254740993');
  });

  const errorText = 'Work only with positive Int.';
  test(errorText, () => {
    expect(() => sumBigInt('-1', '2')).toThrowError(errorText);
    expect(() => sumBigInt('1', '-2')).toThrowError(errorText);
    expect(() => sumBigInt('0', '2')).toThrowError(errorText);
    expect(() => sumBigInt('1', '0')).toThrowError(errorText);
  });
});
