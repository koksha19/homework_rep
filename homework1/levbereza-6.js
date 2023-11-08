const maxValue = (num) => {
    const digArray = String(num).split('').map(Number);
    for(let i = 0; i < digArray.length; i++){
        for(let j = 0; j < digArray.length; j++){
            if(digArray[j] < digArray[j + 1]){
                let swap = digArray[j];
                digArray[j] = digArray[j+1];
                digArray[j + 1] = swap;
            }
        }
    }
    const result = Number(digArray.join(''));
    return result;
}
console.log(maxValue(2398572));
