import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'https://http-complete-guide.firebaseio.com/products.json';
   private headers = new HttpHeaders({'Content-Type': 'chamanapplication/json'})
  constructor(private http: HttpClient) { }
  onSaveProduct(products: any[]) {
   // return this.http.post(this.url, products);
    return this.http.put(this.url, products, {headers: this.headers});
  }
  fetchProducts() {
    return this.http.get(this.url);
  }
  deleteProducts() {
    return this.http.delete(this.url);
  }
  dataTitle() {
    return this.http.get('https://http-complete-guide.firebaseio.com/dataTitle.json');
  }
}
