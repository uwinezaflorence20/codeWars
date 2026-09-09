function lastDigit(arr) {
  if (arr.length === 0) return 1;
  return Number(towerMod(arr.map(x => BigInt(x)), 10n));
}

function eulerPhi(n) {
  let result = n;
  let nn = n;
  for (let p = 2n; p * p <= nn; p++) {
    if (nn % p === 0n) {
      while (nn % p === 0n) nn /= p;
      result -= result / p;
    }
  }
  if (nn > 1n) result -= result / nn;
  return result;
}

function modPow(base, exp, mod) {
  if (mod === 1n) return 0n;
  let result = 1n;
  base %= mod;
  while (exp > 0n) {
    if (exp & 1n) result = (result * base) % mod;
    exp >>= 1n;
    base = (base * base) % mod;
  }
  return result;
}

function capped(arr, cap) {
  if (cap <= 0n) return 0n;
  if (arr.length === 0) return cap >= 1n ? 1n : 0n;
  if (arr.length === 1) {
    const x = arr[0];
    return x < cap ? x : cap;
  }
  const x = arr[0];
  const rest = arr.slice(1);

  if (x === 0n) {
    const restIsZero = capped(rest, 1n) === 0n;
    const val = restIsZero ? 1n : 0n;
    return val < cap ? val : cap;
  }
  if (x === 1n) {
    return 1n < cap ? 1n : cap;
  }
  if (cap <= 1n) return cap;

  let e0 = 0n, p = 1n;
  while (p < cap) { p *= x; e0++; }

  const eCapped = capped(rest, e0);
  if (eCapped >= e0) return cap;
  const val = x ** eCapped;
  return val < cap ? val : cap;
}

function towerMod(arr, m) {
  if (m === 1n) return 0n;
  if (arr.length === 0) return 1n % m;
  if (arr.length === 1) return arr[0] % m;

  const x = arr[0];
  const rest = arr.slice(1);
  const phi = eulerPhi(m);

  const eMod = towerMod(rest, phi);
  const eBig = capped(rest, phi) === phi;
  const exponent = eBig ? eMod + phi : eMod;

  return modPow(x % m, exponent, m);
}