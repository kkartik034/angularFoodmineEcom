import { Food } from "./Food";

export class CartItem{
  constructor( food:Food){ 
    this.food = food;
  }
  food!: Food;
  quantity:number = 1 ;
  price: number = this.food.price;
}                                            //functionality is not working due to bad method or variable is initialize in constructor