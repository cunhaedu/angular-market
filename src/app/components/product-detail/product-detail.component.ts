import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

import {ProductService} from "../../core/services/product.service";
import {Product} from "../../shared/models/Product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent {
  product$!: Observable<Product>;

  constructor() {
    this.retrieveProduct();
  }

  retrieveProduct() {
    const productService = inject(ProductService);
    const activedRoute = inject(ActivatedRoute);

    const id = String(activedRoute.snapshot.paramMap.get('id'));
    this.product$ = productService.find(id)
  }
}
