

for (let num: number = 10; num < 100; num++) {
    let digit: number = num % 10;
    let decimalDigit: number = Math.floor(num / 10);

    if (num % digit == 0 &&
        num % decimalDigit == 0 &&
        num % (digit + decimalDigit) == 0) {
        document.write(num+"<br/>");
    }
}

