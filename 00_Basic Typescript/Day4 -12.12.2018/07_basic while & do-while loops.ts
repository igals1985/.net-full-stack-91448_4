let num: number;

num = Number(prompt("enter a number"));

while (num == 0) {
    num = Number(prompt("enter a number"));
}


do {
    num = Number(prompt("enter a number"));
} while (num == 0);