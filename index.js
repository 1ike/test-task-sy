export const sumByStrings = (a, b) => {
  const smallerString = a.length <= b.length ? a : b;
  const largerString = smallerString === b ? a : b;

  const result = largerString
    .split('')
    .reverse()
    .reduce((acc, char, idx) => {
      const magicNumber = 10;
      const digit = smallerString.length > idx
        ? Number(smallerString[smallerString.length - idx - 1]) : 0;
      const number = Number(char) + digit + Number(acc.needIncrement);
      const needIncrement = magicNumber - number <= 0;

      return {
        string: `${needIncrement ? (number % magicNumber) : number}${acc.string}`,
        needIncrement,
      };
    }, {
      string: '',
      needIncrement: false,
    });

  return result.needIncrement ? `1${result.string}` : result.string;
};

export default (a, b) => {
  const numA = Number(a);
  const numB = Number(b);

  if (!Number.isInteger(numA) || !Number.isInteger(numB)) {
    throw new Error("Can't cast members of sum to Int.");
  }

  if (numA <= 0 || numB <= 0) {
    throw new Error('Work only with positive Int.');
  }

  // if (Number.MAX_SAFE_INTEGER - numA >= numB) return String(numA + numB);

  return sumByStrings(a, b);
};
