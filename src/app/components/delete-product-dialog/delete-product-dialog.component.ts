import {Component, Inject, Output, EventEmitter} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogRef} from "@angular/material/dialog";

import {ListProductComponent} from "../list-product/list-product.component";
import {Product} from "../../shared/models/Product";

@Component({
  selector: 'app-delete-product-dialog',
  templateUrl: './delete-product-dialog.component.html',
  styleUrls: ['./delete-product-dialog.component.scss']
})
export class DeleteProductDialogComponent {
  @Output() submitClicked = new EventEmitter<Product>();

  constructor(
    public dialogRef: MatDialogRef<ListProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }
  ) {}

  removeProduct() {
    this.submitClicked.emit(this.data.product);
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
