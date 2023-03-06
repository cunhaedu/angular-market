import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import { DeleteProductDialogComponent } from './components/delete-product-dialog/delete-product-dialog.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagementComponent } from './components/product-management/product-management.component';
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListProductComponent,
    ProductDetailComponent,
    HeaderComponent,
    DeleteProductDialogComponent,
    ProductManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
