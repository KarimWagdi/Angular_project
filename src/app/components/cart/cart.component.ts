import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  cartProducts: any[] = []
  total: any = 0
  ngOnInit(): void {
    this.getCartProducts()
  }

  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      console.log(this.cartProducts)
    }
    this.getCartTotal()

  }

  getCartTotal() {
    this.total = 0
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }

  }

  decreaseAmount(index: number) {
    this.cartProducts[index].quantity--
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    this.getCartTotal()

  }

  increaseAmount(index: number) {
    this.cartProducts[index].quantity++
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    this.getCartTotal()

  }
  updateChange() {
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1)
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }
  clearCart() {
    this.cartProducts = []
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    this.getCartTotal()

  }


}
