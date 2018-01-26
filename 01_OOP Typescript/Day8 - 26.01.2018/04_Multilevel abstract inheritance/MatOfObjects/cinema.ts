class Cinema {

    public readonly openDaysInWeek: number = 7;  //primitive

    public cinemaName: string;
    
    public manager: Manager;   

    private _morningShift: Shift;
    private _nightShift: Shift;

    private _chairMat: Array<Array<Chair>>;

    private static _cinemaCounter: number = 0;

    //ctor
    public constructor(cinemaName: string = "JB-Cinema") {
        this.cinemaName = cinemaName;
        Cinema._cinemaCounter++;
    }

    //actions

    public static get cinemaCounter(): number {
        return Cinema._cinemaCounter;
    }

    public get morningShift(): Shift {
        return this._morningShift;
    }

    public set morningShift(x: Shift) {
        this._morningShift = x;
    }

    public get nightShift(): Shift {
        return this._nightShift;
    }

    public set nightShift(x: Shift) {
        this._nightShift = x;
    }

    public get chairMat(): Array<Array<Chair>> {
        return this._chairMat;
    }

    public set chairMat(x: Array<Array<Chair>>) {
        this._chairMat = x;
    }

    private addShiftInfo(x: Array<Cashier>): string {
        let tempStr:string = "";
        for (let i: number = 0; i < x.length; i++) {
            tempStr += `cashier number ${i}: ${x[i].printInfo()}<br/>`;
        }
        return tempStr;
    }


    private addChairMatInfo(x: Array<Array<Chair>>): string {
        let tempStr: string = "";
        for (let i: number = 0; i < x.length; i++) {
            tempStr += `<br/><br/>row number ${i}:<br/>`;
            for (let j: number = 0; j < x[i].length; j++) {
                tempStr += `chair number ${j}: ${x[i][j].printInfo()}<br/>`;
            }
        }
        return tempStr;
    }



    //override toString from object(built in function)
    public toString(): string {
        
        let str: string = `cinemaName: ${this.cinemaName}<br/><br/>manager: ${this.manager.getInfo()}<br/>`;

        str += "<br/>morningShift cashiers:--------------------------<br/>";
        str += this.addShiftInfo(this.morningShift.cashierArr);


        str += "<br/>nightShift cashiers:--------------------------<br/>";
        str += this.addShiftInfo(this.nightShift.cashierArr);


        str += "<br/>chairMat Info:--------------------------<br/>";
        str += this.addChairMatInfo(this.chairMat);
        return str;
    }
}