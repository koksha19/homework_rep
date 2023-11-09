const unpackSausages = (goods) => {
    let displayCounter = [];
    let sausagesCount = 0;

    for (const boxes of goods) {
        for (const pack of boxes) {
            if (pack.includes("[") && pack.includes("]")) {
                const sausages = pack.slice(1, 5).split("");
                function sausagesEqual(arr) {
                    return arr.every(element => element === arr[1]);
                }
                const result = sausagesEqual(sausages);
                if(result === true){
                    displayCounter.push(...sausages);
                    sausagesCount++;
                }

            }

            if (sausagesCount === 5) {
                for(let i = 0; i < 4; i++){
                    displayCounter.pop();
                }
                sausagesCount = 0;
            }
        }
    }
    return displayCounter.join(" ");
}

const truck = [
    ["(-)", "[IIII]", "[))))]"], ["IuI", "[llll]"], ["[@@@@]", "UwU", "[uuuu]", "[IlII]"], ["IuI", "[))))]", "x"], ["[oooo]"]
];

const allSausages = unpackSausages(truck);
console.log(allSausages);



