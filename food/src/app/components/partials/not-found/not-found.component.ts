import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
@Input()
visible = false;     //if we said it true then it will be visible in cart but the ngif in cart page !true to cart length
@Input()
notFoundMessage = "Nothing Found!";
@Input()
resetLinkText = "Reset";
@Input()
resetLinkRoute = "/";


}
