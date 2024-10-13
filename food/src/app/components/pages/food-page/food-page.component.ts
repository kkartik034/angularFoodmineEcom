import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent { 
food!: Food;
constructor(activatedRoute: ActivatedRoute, foodService: FoodService,private cartService: CartService, private router: Router){
activatedRoute.params.subscribe((params)=> {
 if (params.id)
foodService.getFoodById(params.id).subscribe(serverFood => {
  this.food = serverFood;
});
  

})
}

addToCart(){
  this.cartService.addToCart(this.food); //not working beacuse of constructor in cart service or add to cart functionality
  this.router.navigateByUrl('/cart-Page');
  


}

}
