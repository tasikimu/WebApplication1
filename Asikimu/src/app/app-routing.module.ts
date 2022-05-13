import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent, data: {title: 'Add new User'}},
  { path: 'products', component: ProductListComponent},
  {path: 'products/:Id', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'shipping', component: ShippingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
