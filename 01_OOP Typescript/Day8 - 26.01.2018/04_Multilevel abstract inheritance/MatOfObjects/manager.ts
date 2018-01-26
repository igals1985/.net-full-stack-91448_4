// CinemaTeamPartner המחלקה הזו יורשת ממחלקת
class Manager extends CinemaTeamPartner {


    public isCinemaOwner: boolean;
    public constructor(age: number, fullName: string, isMale: boolean, address: Address, cinemaName: string, salary: number, isCinemaOwner: boolean) {

        super(age, fullName, isMale, address, cinemaName, salary);
        this.isCinemaOwner = isCinemaOwner;
    }

    public getInfo(): string {

        let str: string = super.getInfo() + `, salary: ${this.salary}`;
        return str;
    }
    
    //מימוש פונקציה אבסטרקטית
    public helloFromPerson2(): string {
        return " Hello I am a manager";
    }


}