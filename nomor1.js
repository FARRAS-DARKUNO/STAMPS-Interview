function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const result = [];

for (let num = 1; num <= 100; num++) {
    if (isPrime(num)) {
        result.push("");
    } else {
        let output = "";
        if (num % 3 === 0) {
            output += "Foo,";
        }
        if (num % 5 === 0) {
            output += "Bar,";
        }
        if (!output) {
            output = num + ',';
        }
        result.push(output);
    }
}

const rowLength = 10;
let outputString = "";
for (let i = result.length - 1; i >= 0; i -= rowLength) {
    const row = result.slice(Math.max(0, i - rowLength + 1), i + 1);
    outputString += row.reverse().join(" ") + " " ;
}

console.log(outputString);