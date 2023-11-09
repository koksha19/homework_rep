const highAndLow = (numbers) => {
    let nums = numbers.split(' ').map(Number);

    const max = Math.max(...nums);
    const min = Math.min(...nums);

    const result = `${max} ${min}`;
    return result;
}
highAndLow("2 4 6 8 3");
highAndLow("6 4 7 -6 66 -12 79");
highAndLow("55 777 -777 52");