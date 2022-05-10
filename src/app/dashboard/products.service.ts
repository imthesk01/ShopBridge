import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productURL = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient ) { }


  fetchProductList(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productURL);
  }
}
