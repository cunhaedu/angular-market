import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {Product} from "../../shared/models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  find(productId: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${productId}`);
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  remove(productId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${productId}`);
  }
}
