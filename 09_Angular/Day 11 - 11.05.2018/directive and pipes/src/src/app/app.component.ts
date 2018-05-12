import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  discount = 10;
  currentDate = new Date();
  categories = ["Beverages", "Condiments", "Confections",
    "Diary Products", "Grains/Cereals", "Meat/Poultry",
    "Produce", "Seafood"];

  today = new Date();
  a: number = 0.259;
  b: number = 1.3495;
}
