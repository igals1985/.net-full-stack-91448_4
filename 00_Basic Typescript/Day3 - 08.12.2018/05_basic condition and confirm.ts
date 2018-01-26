let isHappy: boolean;

document.write(`isHappy = ${isHappy}<br/>`);

isHappy = confirm("Are you happy?");

document.write(`isHappy = ${isHappy}<br/>`);

let isTierd: boolean;

document.write(`isTierd = ${isTierd}<br/>`);

isTierd = confirm("Are you tierd?");

document.write(`isTierd = ${isTierd}<br/>`);


let isHappyAndAwake: boolean = isHappy && !isTierd;
document.write(`isHappyAndAwake = ${isHappyAndAwake}<br/>`);


if (isHappyAndAwake) {
    //executes when isHappyAndAwake is true
    alert("you are ready to learn TS");
}
else {
    //executes when isHappyAndAwake is false
    alert("wake up and start to learn TS");
}
