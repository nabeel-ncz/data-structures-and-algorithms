function swapElement(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

function findPivot(arr: number[], start: number = 0, end: number = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i: number = start + 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swapElement(arr, i, swapIndex);
        }
    }
    swapElement(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(nums: number[], left: number = 0, right: number = nums.length - 1): number[] {
    if (left < right) {
        const pivot = findPivot(nums, left, right);
        quickSort(nums, left, pivot - 1);
        quickSort(nums, pivot + 1, right);
    }
    return nums;
}

console.log(quickSort([882, 332, 121, 24, 212, 645, 190]));