let counter: number=0;
let flag:boolean=true;
do {

    let num: number = Number(prompt("enter a number"));
    let isPrime: boolean = true;


    for (let i: number = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }

    if (isPrime || num == 2) {
        flag = false;
    }
    else {
        counter++;
    }

} while (flag);

alert(counter);