/*
Non- abstract class 'Bimba' must implement inherited abstract member from class 'BasicCar' that extends 'Vehichle':
    1) 'moveLeftAction'
    2)'moveRightAction'
*/
class Bimba extends BasicCar {
    //מימוש מלא של פונקציה שקיבלנו מהממשק 
    public moveLeftAction(speed: number): void {
        document.write(`${this.vehichleName} moves left in speed: ${speed}<br/>`)
    }

    //מימוש מלא של פונקציה שקיבלנו מהממשק 
    public moveRightAction(speed: number): void {
        document.write(`${this.vehichleName} moves right in speed: ${speed}<br/>`)
    }
}