import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Component, inject, OnDestroy} from '@angular/core';
import {map, Observable, Subject, takeUntil} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

import {DeleteProductDialogComponent} from "../delete-product-dialog/delete-product-dialog.component";
import {ProductTypeService} from "../../core/services/product-type.service";
import {ProductService} from "../../core/services/product.service";
import {Product, ProductType} from "../../shared/models/Product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnDestroy {
  ngUnsubscribe = new Subject<void>();

  removeProductDialogRef!:  MatDialogRef<DeleteProductDialogComponent, any>;

  products$!: Observable<Product[]>;

  productTypes$!: Observable<ProductType[]>;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {
    this.listProducts();
    this.listProductTypes();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  listProductTypes(): void {
    const productTypeService = inject(ProductTypeService);
    this.productTypes$ = productTypeService.list();
  }

  listProducts(productTypeId?: string): void {
    this.products$ = this.productService.list().pipe(
      map(product => product.filter(
        p => !productTypeId || p.type.id === productTypeId)
      )
    );
  }

  filterProductType(productTypeId: string): void {
    this.listProducts(productTypeId);
  }

  removeProduct(product: Product) {
    this.productService
      .remove(product.id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.listProducts();
        this.successRemovedProduct();
      });
  }

  openConfirmDeleteDialog(product: Product): void {
    this.removeProductDialogRef = this.dialog.open(DeleteProductDialogComponent, {
      data: { product }
    });

    const dialogSubmitSubscription =
      this.removeProductDialogRef.componentInstance.submitClicked
        .subscribe(product => {
          this.removeProduct(product);

          dialogSubmitSubscription.unsubscribe();
        })
  }

  successRemovedProduct() {
    this._snackBar.open('Produto Removido com sucesso', 'OK', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }
}
