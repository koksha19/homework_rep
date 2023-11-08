const calculateTotal = (value) => {
    let sum = 0;

    if(value < 0){
        return 0;
    }

    for (let i = 0; i < value; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
const total = calculateTotal(10);
console.log(total);