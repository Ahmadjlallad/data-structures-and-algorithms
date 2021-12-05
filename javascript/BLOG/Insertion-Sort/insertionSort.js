const sort = (arr) => {
  const arrayLength = arr.length;
  let temp;
  for (let i = 0; i < arrayLength; i++) {
    let min = i;
    for (let j = i; j < arrayLength; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
};

module.exports = sort;
