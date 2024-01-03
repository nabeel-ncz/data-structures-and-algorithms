function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
}

function binarySarch(array, target, sorted) {
    let start = 0;
    let end = array.length - 1;
    if (sorted === 'asc') {
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (array[mid] === target) {
                return target;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else if (arr[mid] > target) {
                end = mid - 1;
            }
        }
        return -1;
    } else if (sorted === 'desc') {
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (array[mid] === target) {
                return target;
            } else if (arr[mid] < target) {
                end = mid - 1;
            } else if (arr[mid] > target) {
                start = mid + 1;
            }
        }
        return -1;
    } else {
        return new Error('Sorting type not defined!');
    }
}