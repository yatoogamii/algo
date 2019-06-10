let arr = [5, 2, 6, 1, 3, 8, 9, 4, 7];

// v1

for (let i = arr.length - 2; i >= 0; i--) {
  for(let j = arr.length - 1; j >= 0; j--) {
      let iValue = arr[i];
      let jValue = arr[j];
    if (arr[i] > arr[j]) {
      arr[i] = jValue;
      arr[j] = iValue;
    };
  }
}

console.log(arr);

// v2
