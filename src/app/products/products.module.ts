import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    OrderModule,
    HttpClientModule
  ]
})
export class ProductsModule {
 
 }
