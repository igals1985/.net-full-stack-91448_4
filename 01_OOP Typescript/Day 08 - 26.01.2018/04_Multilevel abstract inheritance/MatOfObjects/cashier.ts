
class Cashier extends CinemaTeamPartner {

    public isNightShiftCashier: boolean;

    public constructor(age: number, fullName: string, isMale: boolean, address: Address, cinemaName: string, salary: number, isNightShiftCashier: boolean) {

        super(age, fullName, isMale, address, cinemaName, salary);
        this.isNightShiftCashier = isNightShiftCashier;
    }

    //מימוש פונקציה אבסטרקטית
    public helloFromPerson2(): string {
        return " Hello I am a cashier";
    }

    public printInfo(): string {
        return `${this.fullName} is ${this.age} yers old, and works in ${this.cinemaName}`
    }

   
    public getInfo(): string {

        //super - is a keyword that refers to the base class (in this case "super" is CinemaTeamPartner)
        let str: string = super.getInfo() + `, cinemaName: ${this.cinemaName}`;
        return str;
    }



}