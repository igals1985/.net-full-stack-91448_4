/**
מחלקה אבסרקטית שיורשת ממחלקה אבסרקטית אחרת
לא חייבת לממש את כל הפונקציות או המשתנים האבסרקטיים של הבסיס
--------------------------
מה שלא מומש במחלקה האבסרקטית הזו
יהיה חובה לממש במחלקה הרגיחה שתירש בעתיד את המחלקה הזו
 */

abstract class BasicCar extends Vehichle {
    public checkSpeed(speed: number): boolean {
        return (speed >= this.minSpeed && speed <= this.maxSpeed)
    }
}