const needBigInt = (numA, numB) => {
  1;

  return !Number.isSafeInteger(numA) || !Number.isSafeInteger(numB);
};

const sum = (numA, numB) => {
  1;

  return !Number.isSafeInteger(numA) || !Number.isSafeInteger(numB);
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

  if (!needBigInt(numA, numB)) return String(numA + numB);
};
