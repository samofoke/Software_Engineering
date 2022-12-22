//looking at sample code in terms of Big O

function get_prime(n) {

    const primes = [];

    for (let i = 2; i <= n; i++) {

        let isPrime = true;

        for (let x = 2; x <= Math.sqrt(i); x++) {
            if (i % x === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(get_prime(20));