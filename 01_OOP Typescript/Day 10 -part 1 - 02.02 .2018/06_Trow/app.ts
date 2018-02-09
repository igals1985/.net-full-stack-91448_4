
let obj1: FinanceManager = new FinanceManager();


document.write("<br/>------------------------testTrow(obj1, -5, 'Hapoalim');------------------------<br/>");
testTrow(obj1, -5, "Hapoalim");

document.write("<br/>------------------------testTrow(obj1, 400, 'Hapoalim');------------------------<br/>");
testTrow(obj1, 400, "Hapoalim");

document.write("<br/>------------------------testTrow(obj1, 400, 'Leumi');------------------------<br/>");
testTrow(obj1, 400, "Leumi");


document.write("<br/>------------------------testTrow(obj1, -5, 'Leumi');------------------------<br/>");
testTrow(obj1, -5, "Leumi");


function testTrow(obj: FinanceManager,price: number, bankName: string): void {
    try {
        obj.price = price;
        document.write("obj.price: " + obj.price + "<br>");

        obj.bankName = bankName;
        document.write("obj.bankName: " + obj.bankName + "<br>");
    }
    catch (err) {
        document.write("Error: " + err.message + "<br/>Error Name: " + err.name);

        if (err instanceof Error) {
            document.write("<br/>instanceof Error<br/>");
        }

        if (err instanceof IllegalPriceError) {
            document.write("<br/>instanceof IllegalPriceError<br/>");
        }

        if (err instanceof IllegalBankError) {
            document.write("<br/>instanceof IllegalBankError, pls choose " + err.bankHit + "<br/>");
        }
    }

}


