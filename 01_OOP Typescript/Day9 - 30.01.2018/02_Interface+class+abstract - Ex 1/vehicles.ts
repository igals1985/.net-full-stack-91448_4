abstract class Vehichle implements IMove, IMoveSpeed{
    public vehichleName: string;
    public vehichleSpeed: number=100;

    //מימוש מלא של המשתנים שקיבלנו מהממשק 
    public minSpeed: number;
    public maxSpeed: number;

    //מימוש מלא של פונקציה שקיבלנו מהממשק 
    public moveBackAction(speed: number): void {
        document.write(`${this.vehichleName} moves back in speed: ${speed}<br/>`)
    }

   
    //מחלקה אבסטרקטית שממשת ממשק ולא רוצה לתת מימוש לכל הפונקציות המוגדרות בממשק
    //חובה להגדיר את הפונקציות שלא נירצה לממש במחלקה האבסרקטית הזו
    //בתור פונקציות אבסרקיות שחובה יהיה לממש במחלקות היורשות את המחלקה האבסרקטית הזו
    public abstract moveRightAction(speed: number): void;

    public abstract moveLeftAction(speed: number): void;

    public abstract checkSpeed(speed: number): boolean;


    constructor(vehichleName: string="Bimba", vehichleSpeed: number = 100, minSpeed: number = 10, maxSpeed: number = 150) {
        this.vehichleName = vehichleName;
        this.vehichleSpeed = vehichleSpeed;
        this.minSpeed = minSpeed;
        this.maxSpeed = maxSpeed;
    }

}