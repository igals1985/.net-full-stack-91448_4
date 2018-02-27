let p1: Person = new Person("Bob", 13);

function showInfo(): void {
   
    let element: HTMLElement = document.getElementById("prsonInfo");

    element.innerHTML = `<p>name: ${p1.fullName}</p>`;
}


function partyShowMsg(param: number): void {

    let element: HTMLElement = document.getElementById("bDay");
    element.innerHTML += `<p>Happy Birthday - you are ${param} years old!!!</p>`;

}


function birthDayAction1() {

    p1.birthDayParty(partyShowMsg, 1000);     
}


function birthDayAction2() {

    //הגדרת משתנה מטיפוס פונקציה - שמקבלת מספר , ולא מחזירה ערך
    let partyMsg: (x: number) => void;

    //השמה של פונקציה מתאימה לתוך המשתנה
    partyMsg = partyShowMsg;

    p1.birthDayParty(partyMsg, 2000);

}



function birthDayAction3() {

    //הגדרת משתנה מטיפוס פונקציה - שמקבלת מספר , ולא מחזירה ערך
    let partyMsg: (x: number) => void;


    //השמה של פונקציה מתאימה לתוך המשתנה
    partyMsg = (param: number):void =>{
        let element: HTMLElement = document.getElementById("bDay");
        element.innerHTML += `<p>Happy Birthday - you are ${param} years old!!!</p>`;
    };

    p1.birthDayParty(partyMsg, 3000);


}


