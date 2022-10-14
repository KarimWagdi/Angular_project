import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/interface/icategory';
import { Iproduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList: Iproduct[];
  categoryList: Icategory[];
  totalPrice: number = 0;
  selectedCategoryID: number = 0;

  constructor() {
    this.productsList = [
      {
        id: 1,
        name: "tea",
        price: 5,
        imgURL: "url",
        categoryID: 1,
        available: true

      },
      {
        id: 2,
        name: "Coffe",
        price: 10,
        imgURL: "url",
        categoryID: 1,
        available: true
      },
      {
        id: 3,
        name: "orange juice",
        price: 15,
        imgURL: "url",
        categoryID: 2,
        available: true
      },
      {
        id: 4,
        name: "Pepsi",
        price: 10,
        imgURL: "url",
        categoryID: 3,
        available: true
      },
    ]

    this.categoryList = [
      { id: 1, name: "Hot drinks" },
      { id: 2, name: "Juices" },
      { id: 3, name: "Soda" },
    ]

  }

  ngOnInit(): void {
  }


  buy(productPrice: number, count: string) {
    if (+count > 0) {
      this.totalPrice += productPrice * +count
      console.log(this.totalPrice)
    }

    else {
      alert("you should buy with postive value ")
    }
  }

}
