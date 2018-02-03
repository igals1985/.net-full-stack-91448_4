
class IllegalBankError extends Error {

    public bankHit: string = "Hapoalim";

    constructor() {
        super();
        this.message = "Not a legal Bank!!!!";
        this.name = "IllegalBankError";
    }

}