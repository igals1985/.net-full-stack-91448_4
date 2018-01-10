class Person {
    //-----------------properties----------
    //-----------מאפייני המחלקה שהם משתנים
    public firstName: string;
    public lastName: string;



    //-----------------methods----------
    //--------פעולות המחלקה שהן פונקציות

    public sayHelloFromPerson(): void {
        document.write(`Hello!! I am ${this.firstName} ${this.lastName}<br/>`);
    }
}
