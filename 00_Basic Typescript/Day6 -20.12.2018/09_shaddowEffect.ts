
{
    var x: number = 8;
    document.write("x in outer block: " + x + "<br/>");
    {
        //var שגיאה - לא ניתן להגדיר משתנה מטיפוס 
        //פעמיים בקוד, כאשר כל משתנה מטיפוס שונה
        var x: number = 7;
        document.write("x in inner block: " + x + "<br/>");
    }
    document.write("x in outer block: " + x + "<br/>");
}


{
    let y: number = 8;
    document.write("y in outer block: " + y + "<br/>");
    {
        //let תקין -  ניתן להגדיר משתנה מטיפוס 
        //פעמיים בקוד, כאשר כל משתנה מטיפוס שונה
        //מאחורי הקלעים יש את אפקט הצל
        let y: number = 7;
        document.write("y in inner block: " + y + "<br/>");
    }
    document.write("y in outer block: " + y + "<br/>");
   
}
