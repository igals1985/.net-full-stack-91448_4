let chair1: any = {
    "color": "red",
    "price": 100,
    "isSold": true
};

let chair2: any = {
    "color": "blue",
    "price": 100,
    "isSold": true
};

let chair3: any = {
    "color": "yellow",
    "price": 70,
    "isSold": false
};

document.write(`--------------chair1-------------<br/>`);
for (let i in chair1) {
    document.write(`${chair1[i]}<br/>`);
}

document.write(`--------------chair2-------------<br/>`);
for (let i in chair2) {
    document.write(`${chair2[i]}<br/>`);
}

document.write(`--------------chair3-------------<br/>`);
for (let i in chair3) {
    document.write(`${chair3[i]}<br/>`);
}