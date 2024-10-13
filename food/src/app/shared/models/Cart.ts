import { CartItem } from "./CartItem";
// import { Food } from "./Food"; 

export class Cart{
    items:CartItem[] = [];
    totalPrice:number = 0;
    totalCount:number = 0;
  }