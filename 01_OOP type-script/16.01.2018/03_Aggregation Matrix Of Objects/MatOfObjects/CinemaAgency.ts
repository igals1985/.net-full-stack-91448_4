class CinemaAgency {

    //readonly המקום היחיד שאפשר להציב ערך למשתנה סטטי מסוג 
    public static readonly agencyName: string="JB Agency";

    public static phoneNumber: string = "03-5425723";
   
    public addressCountry: string = "Israel";

     //readonly אופציה ראשונה להציב ערך למשתנה מסוג 
    public readonly addressCity: string = "Jerusalem";

    constructor() {

        //בנאי יכול להיקרא מספר פעמים עבור מחלקה מסויימת
        //משתנה סטטי - הוא ברמת מחלקה ולכן יש בעיה לבצע כאן השמה בכל קריאה לבנאי
        //Left- hand side of assignment expression cannot be a constant or a read- only property	
        //CinemaAgency.agencyName = "Test Agency";   --> static readonly can not be changed in the ctor


        //בנאי יכול להיווצר עבור אובייקט פעם אחת בלבד
        //readonly אופציה שניה להציב ערך למשתנה מסוג 
        this.addressCity = "Tel-Aviv";
    }

    public getInfo(): string {
        //Left- hand side of assignment expression cannot be a constant or a read- only property	
        //this.address="London UK"  --> error
        return ``;
    }
}