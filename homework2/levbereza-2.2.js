const equalSum = (arr) => {
    let leftSum = 0;
    let rightSum = 0;

    for(let i = 0; i < arr.length; i++){
        leftSum += arr[i];
    }

    for(let j = 0; j < arr.length; j++){
        leftSum -= arr[j];
        if(leftSum === rightSum){
            return j;
        }
        rightSum += arr[j];
    }
    return -1;
}
const equal = equalSum([4, 6, 8, 2, 8, 8, 2, 9, 1]);
console.log(equal);
