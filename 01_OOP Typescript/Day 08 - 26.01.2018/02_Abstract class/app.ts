let cinemaStore: FoodStore = new FoodStore();
cinemaStore.foodList=  [new Pizza(), new Chips(), new Chips(), new Pizza(), new PersonalPizza()];


//Cannot create an instance of the abstract class 'Food'.
//let food1: Food = new Food(); //--> compilation error



//אפשר ליצור מצביע מסוג מחלקה אבסטרקטית
//אבל אי אפשר ליצור אובייקט בפועל ממחלקה אבסטרקטית
let food2: Food = new Pizza();