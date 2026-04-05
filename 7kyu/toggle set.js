const toggleBit = (n, position) => {
  return n ^ (1 << position);
};

const setBit = (n, position) => {
  return n | (1 << position);
};

const clearBit = (n, position) => {
  return n & ~(1 << position);
};

const isBitSet = (n, position) => {
  return (n & (1 << position)) !== 0;
};

const setMultipleBits = (n, mask) => {
  return n | mask;
};

const clearMultipleBits = (n, mask) => {
  return n & ~mask;
};

const toggleMultipleBits = (n, mask) => {
  return n ^ mask;
};