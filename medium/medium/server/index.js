function sumOfSquaredArray(arr) {
    return arr.reduce((a, b) => a + (b * b), 0);
}

async function waitForSeconds(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

(async () => {
    console.log(sumOfSquaredArray([1, 2, 3]));
    await waitForSeconds(1);
    console.log(sumOfSquaredArray([1, 2, 3, 4]));
    await waitForSeconds(2);
    console.log(sumOfSquaredArray([1, 2, 3, 4, 5]));
})();
