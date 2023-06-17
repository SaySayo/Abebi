import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: any;
  isAddMode: boolean = true;
  newProduct: any = {
    name: '',
    description: '',
    imageUrl: '',
    price: null
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isAddMode = false;
      this.productService.getProductById(id).subscribe(product => {
        this.selectedProduct = product;
        this.newProduct = Object.assign({}, this.selectedProduct);
      });
    }
  }

  onSubmit() {
    if (this.isAddMode) {
      this.productService.addProduct(this.newProduct).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.productService.updateProduct(this.selectedProduct.id, this.newProduct).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
