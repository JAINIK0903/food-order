import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All' ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 1 },
      { name: 'Lunch', count: 2 },
      { name: 'SlowFood', count: 3 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 2 },
      { name: 'Soup', count: 1 },
    ]
  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'salad',
        cookTime: '5-10',
        price: 8,
        favourite: false,
        origins: ['roman'],
        star: 4.5,
        imageUrl: "assets/images/foods/food-1.jpg",
        tags: ['healthy', 'salad', 'soy'],
      },
      {
        id: 2,
        name: 'Meatball',
        cookTime: '20-30',
        price: 20,
        favourite: true,
        origins: ['persia', 'middle east', 'china'],
        star: 4.7,
        imageUrl: "assets/images/foods/food-2.jpg",
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        cookTime: '10-15',
        price: 5,
        favourite: false,
        origins: ['germeny', 'us'],
        star: 4.0,
        imageUrl: "assets/images/foods/food-3.jpg",
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'French Fries',
        cookTime: '15-20',
        price: 2,
        favourite: true,
        origins: ['belgium', 'france'],
        star: 3.5,
        imageUrl: "assets/images/foods/food-4.jpg",
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Soup',
        cookTime: '40-50',
        price: 11,
        favourite: false,
        origins: ['india', 'asia'],
        star: 3.5,
        imageUrl: "assets/images/foods/food-5.jpg",
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegitables Pizza',
        cookTime: '40-50',
        price: 9,
        favourite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: "assets/images/foods/food-6.jpg",
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'French Toast',
        cookTime: '15-20',
        price: 2,
        favourite: true,
        origins: ['belgium', 'france'],
        star: 3.5,
        imageUrl: "assets/images/foods/food-7.jpg",
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 8,
        name: 'Ice Cream',
        cookTime: '45-50',
        price: 4,
        favourite: true,
        origins: ['belgium', 'france'],
        star: 3.5,
        imageUrl: "assets/images/foods/food-8.jpg",
        tags: ['SlowFood'],
      }
    ]
  }
}
