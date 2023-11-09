const hanoiTowers = (num, startRod, finishRod, auxRod) => {
    if (num === 1) {
        return 1;
    } else {
        const moves1 = hanoiTowers(num - 1, startRod, finishRod, auxRod);

        const moves2 = hanoiTowers(num - 1, auxRod, startRod, finishRod);

        return moves1 + moves2 + 1;
    }
}
const total = hanoiTowers(9, "Rod1", "Rod2", "Rod3");
console.log(total);
