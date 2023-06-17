import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product/product.module';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnChanges {
  @Input() selectedProduct: Product;
  @Output() productAdded = new EventEmitter<Product>();
  @Output() productUpdated = new EventEmitter<Product>();
  newProduct: Product;
  isAddMode: boolean;

  constructor() { }

  ngOnChanges() {
    if (this.selectedProduct) {
      this.newProduct = Object.assign({}, this.selectedProduct);
      this.isAddMode = false;
    } else {
      this.newProduct = { name: '', description: '', imageUrl: '', price: null };
      this.isAddMode = true;
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.isAddMode) {
      this.productAdded.emit(this.newProduct);
    } else {
      this.productUpdated.emit(this.newProduct);
    }
    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.newProduct = { name: '', description: '', imageUrl: '', price: null };
    this.isAddMode = true;
  }
}
