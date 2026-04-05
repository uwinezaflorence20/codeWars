const toggleBit = (n, position) => {
  return n ^ (1 << position);
};

const setBit = (n, position) => {
  return n | (1 << position);
};