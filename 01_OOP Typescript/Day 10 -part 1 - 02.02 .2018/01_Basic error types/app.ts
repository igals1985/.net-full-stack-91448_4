class Cat {

}


// 1. Compilation Error:
let a: number = 10;
document.write(a);

// 2. Runtime Error:
let b: Cat; // ReferenceError Exception -Cannot read property 'toString' of undefined
document.write(b.toString() + "<br/>");


// 3. Logic Error:
let c: number = 10;
let d: number = 20;
let sum: number = c * d;
document.write(`${c} + ${d} = ${sum}`);
