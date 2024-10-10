function delDuplicates(array) {
  const uniqueSet = new Set(array);
  const uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let mid = Math.floor(array.length / 2);

    const leftArray = array.slice(0, mid);
    const rightArray = array.slice(mid, array.length);

    const first = mergeSort(leftArray);
    const second = mergeSort(rightArray);

    let i = 0,
      j = 0,
      k = 0;
    var tempArray = [];

    while (i < first.length || j < second.length) {
      if (first[i] === undefined) {
        tempArray[k++] = second[j++];
      } else if (second[j] === undefined) {
        tempArray[k++] = first[i++];
      } else if (first[i] < second[j]) {
        tempArray[k++] = first[i++];
      } else {
        tempArray[k++] = second[j++];
      }
    }
    return tempArray;
  }
}

export { delDuplicates, mergeSort };
