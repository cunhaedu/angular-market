import {Component, Output, EventEmitter} from '@angular/core';

import { Product } from "../../shared/models/Product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent {
  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();

  product = new Product();

  handleAddProduct() {
    this.addProduct.emit({...this.product});
    this.product = new Product();
  }
}
