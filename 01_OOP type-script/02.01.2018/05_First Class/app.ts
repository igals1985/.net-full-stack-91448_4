
class Chair {

    public color: string;
    public price: number;
    public isSold: boolean;
}

//-----------------first instance of the Chair class----------------
let chair1: Chair;

document.write(`chair1 before new Chair(): ${chair1}<br/>`);  //-->undefined

//chair1.color = "red";  -->runtime error : Cannot set property 'color' of undefined

chair1 = new Chair();

chair1.color = "red";
chair1.price = 100;
chair1.isSold = true;

document.write(`chair1--------------------<br/>`); 
document.write(`chair1.color after new Chair(): ${chair1.color}<br/>`); 
document.write(`chair1.price after new Chair(): ${chair1.price}<br/>`); 
document.write(`chair1.isSold after new Chair(): ${chair1.isSold}<br/>`); 

//-----------------second instance of the Chair class----------------
let chair2: Chair = new Chair();
chair2.color = "blue";
chair2.price = 30;
chair2.isSold = false;
document.write(`chair2--------------------<br/>`); 
document.write(`chair2.color after new Chair(): ${chair2.color}<br/>`);
document.write(`chair2.price after new Chair(): ${chair2.price}<br/>`);
document.write(`chair2.isSold after new Chair(): ${chair2.isSold}<br/>`); 