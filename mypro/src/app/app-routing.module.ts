import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {ProductlistComponent} from './productlist/productlist.component'
import {MyaccountComponent} from './myaccount/myaccount.component'
import {ProductsearchComponent} from './productsearch/productsearch.component'
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path:"home" , component:HomeComponent},
  {path: 'productlist', component: ProductlistComponent },
  {path :'productsearch', component: ProductsearchComponent},
  {path :'myaccount', component:MyaccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
