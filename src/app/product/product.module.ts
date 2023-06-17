import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { AddProductComponent } from '../add-product/add-product.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


export class Product {
  id!: number;
  name!: string;
  description!: string;
  price!: number;
}

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, AddProductComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ProductListComponent },
      { path: ':productId', component: ProductDetailComponent },
      { path: 'add', component: AddProductComponent }
    ])
  ],
  exports: [ProductListComponent, ProductDetailComponent, AddProductComponent]
})
export class ProductModule { }
