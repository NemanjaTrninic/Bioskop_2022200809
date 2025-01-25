import { CommonModule, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CartService } from './cart.service';
import { UserService } from '../service&model/user.service';
import { MatTableModule} from '@angular/material/table'; 

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatTableModule, 
    MatIconModule, 
    MatButtonModule, 
    CommonModule, 
    MatToolbarModule, 
    NgIf, RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [CartService, UserService]
})
export class CartComponent implements OnInit {
  cartItems: any[]=[]
  displayedColumns: string[] = ['ime', 'zanr', 'cenaKarte', 'datumPrikazivanja', 'obrisi'];
  
  constructor(private cartService: CartService, public userService: UserService){}
  
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems()
  }
  clearCart(){
    this.cartService.clearCart
    this.cartItems  
  }
  removeFromCart(item:any){
    this.cartService.removeFromCart(item)
    this.cartItems = this.cartService.getCartItems()
  }

}
