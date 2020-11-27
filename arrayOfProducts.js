function arrayOfProducts(array) {
    let forwardMemo = [];
    let backwardMemo = [];
    let result = [];
    forwardMemo[0] = array[0];
    backwardMemo[array.length - 1] = array[array.length - 1];
    for (let i = 1; i < array.length; i++) {
        let j = array.length - i - 1;
        forwardMemo[i] = array[i] * forwardMemo[i - 1];
        backwardMemo[j] = array[j] * backwardMemo[j + 1]
    }
    backwardMemo[0] = forwardMemo[array.length - 1];
    result.push(backwardMemo[1]);
    for (let i = 1; i < array.length - 1; i++) {
        result.push(forwardMemo[i - 1] * backwardMemo[i + 1]);
    }
    result.push(forwardMemo[array.length - 2]);
    return result;
}