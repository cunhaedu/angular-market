import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./components/list-product/list-product.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ProductManagementComponent} from "./components/product-management/product-management.component";

const routes: Routes = [
  { path: '', component: ListProductComponent },
  { path: 'list/:id', component: ProductDetailComponent },
  { path: 'products-management', component: ProductManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
