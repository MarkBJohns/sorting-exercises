function merge(arr1, arr2) { 
    const merged = [];
    
    let a = 0, b = 0;
    
    while (a < arr1.length && b < arr2.length) {
        if (arr1[a] < arr2[b]) {
            merged.push(arr1[a]);
            a++;
        } else {
            merged.push(arr2[b]);
            b++;
        }
    }
    while (a < arr1.length) {
        merged.push(arr1[a]);
        a++;
    }
    while (b < arr2.length) {
        merged.push(arr2[b]);
        b++;
    }
    
    return merged
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}



module.exports = { merge, mergeSort};