const is_prime = (n) => {
    if (n <= 1) {
        return false;
    }

    if (n === 2) {
        return true;
    }

    if (n % 2 === 0) {
        return false;
    }

    const root = parseInt(Math.sqrt(n));
    for (let divisor = 3; divisor <= root; divisor += 2) {
        if (n % divisor === 0) {
            return false;
        }
    }
    return true;
}
is_prime(127);