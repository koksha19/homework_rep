const landPerimeter = (arr) => {
    const rows = arr.length;
    const columns = arr[0].length;
    let perimeter = 0;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if(arr[i][j] === 'X') {
                perimeter += 4;
                if (i > 0 && arr[i - 1][j] === 'X') {
                    perimeter -= 2;
                }
                if (j > 0 && arr[i][j - 1] === 'X') {
                    perimeter -= 2;
                }
            }
        }
    }

    return perimeter;
}
const islands= [ 'XOOXO',
    'XOXXO',
    'OOOXO',
    'X0OXO',
    'OXOXO',
    '0X0X0'];


console.log(`Total land perimeter: ${landPerimeter(islands)}`);