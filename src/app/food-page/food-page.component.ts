import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food!: Foods;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
