var CinemaAgency = (function () {
    function CinemaAgency() {
        //בנאי יכול להיקרא מספר פעמים עבור מחלקה מסויימת
        //משתנה סטטי - הוא ברמת מחלקה ולכן יש בעיה לבצע כאן השמה בכל קריאה לבנאי
        //Left- hand side of assignment expression cannot be a constant or a read- only property	
        //CinemaAgency.agencyName = "Test Agency";   --> static readonly can not be changed in the ctor
        this.addressCountry = "Israel";
        //readonly אופציה ראשונה להציב ערך למשתנה מסוג 
        this.addressCity = "Jerusalem";
        //בנאי יכול להיווצר עבור אובייקט פעם אחת בלבד
        //readonly אופציה שניה להציב ערך למשתנה מסוג 
        this.addressCity = "Tel-Aviv";
    }
    CinemaAgency.prototype.getInfo = function () {
        //Left- hand side of assignment expression cannot be a constant or a read- only property	
        //this.address="London UK"  --> error
        return "";
    };
    //readonly המקום היחיד שאפשר להציב ערך למשתנה סטטי מסוג 
    CinemaAgency.agencyName = "JB Agency";
    CinemaAgency.phoneNumber = "03-5425723";
    return CinemaAgency;
}());
//# sourceMappingURL=cinemaAgency.js.map