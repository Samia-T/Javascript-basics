//rest operator - must be last parameter
function sum(discount, ...prices) {
    const total =  prices.reduce((a, b) => a + b);
    return total * (1-discount);
}
//default param (like python)
console.log(sum(0.1, 20, 30));