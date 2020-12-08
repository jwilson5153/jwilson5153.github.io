// If key is in list, returns any index where key is
// located within list; otherwise returns -insertPoint - 1.
// Assumes list is already sorted.
function binarySearch(list, key) {
    var left = 0;
    var right = list.length - 1;
    while (left <= right) {
        var mid = left + ((right - left) >>> 1);
        var cmp = key - list[mid];
        if (cmp > 0)
            left = mid + 1;
        else if (cmp < 0)
            right = mid - 1;
        else
            return mid;
    }

    // key is not present in list, but if it
    // were, it would be stored at location left.
    return -(left + 1);
}