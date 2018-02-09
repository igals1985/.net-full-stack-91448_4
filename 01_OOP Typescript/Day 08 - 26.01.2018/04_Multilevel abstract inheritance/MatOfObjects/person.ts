abstract class Person {
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


    abstract helloFromPerson1(): string;
    abstract helloFromPerson2(): string;

    public constructor(age: number, fullName: string, isMale: boolean, address: Address) {
        Person.personCounter++;
        this.age = age;
        this.fullName = fullName;
        this.isMale = isMale;
        this.address = address;
    }

    public set age(a: number) {
        this._age = (a >= 0 && a <= 120) ? a : 0;
    }

    public get age(): number {
        return this._age;
    }

}