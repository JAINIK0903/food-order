import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  max = 10;
  rate = 5;
  isReadonly = true;
  constructor(private _foodService: FoodService) { }
  ngOnInit(): void {
    this.foods = this._foodService.getAll();
  }

}
