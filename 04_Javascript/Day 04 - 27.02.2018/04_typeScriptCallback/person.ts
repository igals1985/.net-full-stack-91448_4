class Person {
    private nameField: string;
    private ageField: number;


    constructor(fullName: string, age: number) {
        this.nameField = fullName;
        this.ageField = (age >= 0 && age <= 120) ? age : 0;
    }


    public get fullName(): string {
       return this.nameField;
    }




    /**
     * 
     * @param birthdayPresent - this param is a function that get one parameter (number type) and returns void
     * @param timeToParty - this param is a number that represents the time that the setTimeOut will wait before calling the "birthdayPresent" function
       */
    public birthDayParty(birthdayPresent: (x:number) =>void  , timeToParty: number): void{


        //זוהי פעולה אסינכרונית שלא מעכבת את המשך ביצוע הקוד setTimeout
        setTimeout(
            () => { birthdayPresent(this.ageField) }
            , timeToParty);



        //*******************this part of code will be executed before the setTimeout is done*****************
        this.ageField++;

    
    }
}