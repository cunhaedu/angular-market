import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Subject, takeUntil} from "rxjs";

import {ProductService} from "../../core/services/product.service";
import {Product} from "../../shared/models/Product";

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnDestroy, AfterViewInit {
  ngUnsubscribe = new Subject<void>();

  displayedColumns: string[] = ['id', 'name', 'type'];

  dataSource!: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
  ) {
    this.listProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  listProducts(): void {
    this.productService.list().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      products => {
        this.dataSource = new MatTableDataSource(products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource && this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
