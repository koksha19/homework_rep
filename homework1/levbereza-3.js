const findNb = (m) => {
    let n = 0;
    while(m > 0){
        n++;
        let powCubes = n ** 3;
        m -= powCubes;
    }
    if(m < 0){
        return -1;
    }else{
        return n;
    }
}
const total = findNb(228);
console.log(total);