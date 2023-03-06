import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {ProductType} from "../../shared/models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private apiUrl = 'http://localhost:3000/product-types';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(this.apiUrl);
  }
}
