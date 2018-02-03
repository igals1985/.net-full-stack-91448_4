
class FinanceManager {

    private _price: number;
    private _bankName: string;

    public set price(price: number) {

        // ראשית, נבדוק אם המידע שגוי
        if (price < 0) {
            throw new IllegalPriceError(); // זריקת חריגה שאנו בנינו
        }
        // אם הכל בסדר, נבצע את קוד הפונקציה
        this._price = price * 1.18;

    }

    public get price(): number {
        return this._price;
    }


    public set bankName(bankName: string) {

        // ראשית, נבדוק אם המידע שגוי
        if (bankName != "Hapoalim") {
            throw new IllegalBankError(); // זריקת חריגה שאנו בנינו
        }
        // אם הכל בסדר, נבצע את קוד הפונקציה
        this._bankName = bankName;

    }

    public get bankName(): string {
        return this._bankName;
    }

}
