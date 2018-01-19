class Person {
    private _age: number;
    public fullName: string;
    public isMale: boolean;

    public static personCounter: number = 0;

    //בנאדם הוא לא כתובת
    //לבנאדם יש כתובת
    //לכן יש כאן הכלה
    public address: Address;  //הכלה


     //this is the getInfo() function in the base class
    public getInfo(): string {
        let str: string = `fullName:${this.fullName}, age: ${this.age} `;
        return str;
    }

    //this is the helloFromPerson() function in the base class
    public helloFromPerson(): string {
       return "hello From Person!!!";
    }

    public constructor() {
        console.log("A new Person is created!!!");
        Person.personCounter++;
    }

    public set age(a: number) {
        this._age = (a >= 0 && a <= 120) ? a : 0;
    }

    public get age(): number{
        return this._age;
    }
    
}