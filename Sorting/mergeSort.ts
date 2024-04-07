function mergeArrays(arr1: number[], arr2: number[]): number[] {
    let i = 0, j = 0;
    let output: number[] = [];

    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        output.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        output.push(arr2[j]);
        j++;
    }

    return output;
}


function mergeSort(nums: number[]): number[] {
    if (nums.length <= 1) return nums;
    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));

    return mergeArrays(left, right);
}


console.log(mergeSort([882, 332, 121, 24, 212, 645, 190]));