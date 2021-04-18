const swap = (arr: Array<number>, i: number, j: number): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const XORswap = (arr: Array<number>, i: number, j: number): void => {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
};

export {};
