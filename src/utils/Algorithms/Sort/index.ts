const bubbleSort = (dataset: Array<number>): void => {
  for (let i = 0; i < dataset.length - 1; i++) {
    for (let j = 1; j < dataset.length - i - 1; j++) {
      if (dataset[j] > dataset[j + 1]) {
        [dataset[j], dataset[j + 1]] = [dataset[j + 1], dataset[j]];
      }
    }
  }
};

export { bubbleSort };
