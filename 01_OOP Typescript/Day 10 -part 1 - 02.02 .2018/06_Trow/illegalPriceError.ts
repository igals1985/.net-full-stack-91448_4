// בניית חריגה ספציפית עבור מחיר שגוי
class IllegalPriceError extends Error {
    constructor() {
        super();
        this.message = "Not a legal Price!!!!";
        this.name = "IllegalPriceError";
    }
}
