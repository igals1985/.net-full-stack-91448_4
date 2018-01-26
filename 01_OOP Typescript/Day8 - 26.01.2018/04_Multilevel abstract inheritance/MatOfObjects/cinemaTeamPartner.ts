abstract class CinemaTeamPartner extends Person{


    public constructor(age: number, fullName: string, isMale: boolean, address: Address, cinemaName: string, salary: number) {

        super(age, fullName, isMale, address);
        this.cinemaName = cinemaName;
        this.salary = salary;
    }

    //מימוש של פונקציה אבסרקטית מהבסיס
    public helloFromPerson1(): string {
        return "Hello I an a CinemaTeamPartner!!";
    }


    private _cinemaName: string;

    public set cinemaName(cinemaName: string) {
        if (cinemaName == "YesPlanet" || cinemaName == "CinemaCity" || cinemaName == "JB-Cinema") {
            this._cinemaName = cinemaName;
        }

    }

    public get cinemaName(): string {
        return this._cinemaName;
    }

    
    private _salary: number;
    get salary(): number {
        return this._salary;
    }
    set salary(x: number) {
        if (x >= 4000) {
            this._salary = x;
        }
        else {
            this._salary = 4000;
        }
    }
}