import { Injectable } from "@angular/core";

@Injectable ()

export class CartService {
    private cartItems: any [] = [];

    constructor(){
        const savedcart = localStorage.getItem('cart')
        if(savedcart){
            this.cartItems = JSON.parse(savedcart)
            console.log( ' podaci iz skladista',this.cartItems)
        } else{
            console.log('skladiste je prazno')
        }
    }

    addToCart(item:any){
        this.cartItems.push(item)
        localStorage.setItem('cart',JSON.stringify(this.cartItems))
        console.log('Dodato u Korpu', item)
        console.log('Trenutna Korpa', this.cartItems)
    }

    getCartItems () {
        return this.cartItems;
        
    
    }
    clearCart () {
        this.cartItems = [];
        localStorage.removeItem('cart');
    }

    removeFromCart(item:any){
        this.cartItems= this.cartItems.filter(cartItem => cartItem !== item)
        localStorage.setItem('cart',JSON.stringify(this.cartItems   ))
    }

}
