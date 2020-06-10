import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductModel } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string = 'https://www.itgenius.co.th/sandbox_api/ministockapi/public/api/products';

  constructor(private _http:HttpClient) { }

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getProducts(): Observable<ProductModel>{
    return this._http.get<ProductModel>(this.url)
  }
}
