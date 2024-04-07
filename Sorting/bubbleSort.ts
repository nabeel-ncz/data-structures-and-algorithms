function bubbleSort(nums: number[]): number[] {
    for (let i = nums.length - 1; i >= 0; i++) {
        let sorted = true;
        for (let j = 0; j <= i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                sorted = false;
            }
        }
        if (sorted) {
            break;
        }
    }
    return nums;
}

console.log(bubbleSort([882, 332, 121, 24, 212, 645, 190]));