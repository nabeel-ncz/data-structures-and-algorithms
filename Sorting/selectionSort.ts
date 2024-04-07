function selectionSort(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[lowest]) {
                lowest = j;
            }
        };
        if (lowest !== i) {
            [nums[i], nums[lowest]] = [nums[lowest], nums[i]];
        };
    };
    return nums;
}

console.log(selectionSort([882, 332, 121, 24, 212, 645, 190]));