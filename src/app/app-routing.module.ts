import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { UserOrderComponent } from './components/user-order/user-order.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'order', component: UserOrderComponent },
  { path: 'addProduct', component: AddProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: UserOrdersComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
