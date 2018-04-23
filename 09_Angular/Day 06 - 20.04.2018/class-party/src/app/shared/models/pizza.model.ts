import { PizzaSlice } from "./pizza-slice.model";

export class Pizza{
    pizzaSlices:PizzaSlice[]=new Array <PizzaSlice>(8);
    
    setSliceTopping(topName:string,index:number):void{
        this.pizzaSlices[index]=new PizzaSlice();
        this.pizzaSlices[index].toping=topName;
    }
}