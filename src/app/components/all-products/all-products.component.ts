import { Component, OnInit } from '@angular/core';
import { MyProductsService } from 'src/app/services/my-products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  showProducts:any=[]
  myArray:any[]=[]
  constructor( private _MyProductsService:MyProductsService) {
    this.showProducts= this._MyProductsService
    this.myArray =this.showProducts.getAllProducts()
   }

  ngOnInit(): void {
    console.log(this.myArray);
  
  }


}
