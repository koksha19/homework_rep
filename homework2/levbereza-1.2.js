const combHonor = (arr, d) => {
    let i = 0;
    let maxHonor = [];

    while (i < arr.length/d) {
        maxHonor.push(0);
        for (let j = i; j < arr.length; j += arr.length/d) {
            maxHonor[i] += arr[j];
        }
        i++;
    }
    return Math.max(...maxHonor);
}
const honor = [1,2,3,4]
const day = 2;
console.log(combHonor(honor, day));