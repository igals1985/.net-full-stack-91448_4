class Cinema {
    public cinemaName: string;
    private _manager: Manager;


    //ctor
    public constructor(cinemaName: string = "JB-Cinema") {
        this.cinemaName = cinemaName;
    }

    //actions
    public get manager(): Manager {
        return this._manager;
    }

    public set manager(x: Manager) {
        this._manager = x;
    }
    
    public getInfo(): string {
        let str: string = `cinemaName: ${this.cinemaName}<br/>manager: ${this.manager.getInfo()}<br/>`;
        return str;
    }
}