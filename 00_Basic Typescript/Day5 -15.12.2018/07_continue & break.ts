document.write(`continue<br/>`);
let index: number = 0;

while (index < 10) {

    index++;

    if (index % 3 == 0) {
        continue;
    }
    document.write(`index: `);
    document.write(`${index}<br/>`);
}

document.write(`after continue<br/>`);

document.write(`<br/>break<br/>`);
let index1: number = 0;

while (index1 < 10) {

    index1++;

    if (index1 % 3 == 0) {
        break;
    }
    document.write(`index1: `);
    document.write(`${index1}<br/>`);
}


document.write(`after break<br/>`);

