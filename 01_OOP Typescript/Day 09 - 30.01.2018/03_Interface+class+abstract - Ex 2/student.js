var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        _super.apply(this, arguments);
        //========דרך ראשונה===========
        //מימוש של המשתנה מהמחלקה האבסרקטית
        this.isMale = true;
    }
    Object.defineProperty(Student.prototype, "age", {
        //========דרך שניה===========
        //מימוש של המשתנה מהמחלקה האבסרקטית
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (age >= 5 && age <= 80) {
                this._age = age;
            }
            else {
                this._age = 5;
            }
        },
        enumerable: true,
        configurable: true
    });
    //מימוש מלא של פונקציה שקיבלנו מהממשק 
    Student.prototype.moveLeftAction = function (speed) {
        document.write(this.fullName + " moves left in speed: " + speed + "<br/>");
    };
    //מימוש מלא של פונקציה שקיבלנו מהממשק 
    Student.prototype.moveRightAction = function (speed) {
        document.write(this.fullName + " moves right in speed: " + speed + "<br/>");
    };
    Student.prototype.startTalking = function () {
        document.write("student starts to talk:)<br/>");
    };
    return Student;
}(Person));
//# sourceMappingURL=student.js.map