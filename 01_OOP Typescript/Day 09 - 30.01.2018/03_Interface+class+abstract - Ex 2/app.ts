let arr: ITalk[] = [new Student(), new SmartPhone()];

document.write("--------------------ITalk[] array loop----------------------<br/>");
for (let i: number = 0; i < arr.length; i++) {
    arr[i].startTalking();
}

