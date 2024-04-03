function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapIdx = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[swapIdx] > arr[j]) {
                swapIdx = j;
            }
        }; 
        let temp = arr[swapIdx];
        arr[swapIdx] = arr[i];
        arr[i] = temp;
    } return arr;
}

//TC: O(n2) SC = O(1)

//Select min element and sort