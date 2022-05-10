import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  private UpdateURL = "https://fakestoreapi.com/products/";
  private addURL = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient ) { }

  updateProduct(id:any ,ProductsDetail: any): Observable<any>{
    return this.http.put(this.UpdateURL+id, ProductsDetail)
  }

  addProduct(ProductsDetail: any): Observable<any>{
    return this.http.post(this.addURL, ProductsDetail)
  }

}
