import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // url = 'https://http-complete-guide.firebaseio.com/products.json';
  //  private headers = new HttpHeaders({'Content-Type': 'chamanapplication/json'})
  constructor(private http: HttpClient) { }

  // product = {
  //   name: "Mobile",
  //   id: "002"
  // };

  // product = [
  //   { name: "Laptop",id: "001"},
  //   { name: "Mobile",id: "002"},
  //   { name: "TV",id: "003"},
  //   { name: "Washing Machine",id: "004"}

  // ];
  url = 'https://jsonplaceholder.typicode.com/users';
  user(): Observable<any>{
   return this.http.get(this.url);
 }

//   // userName = new Subject<any>();
//  userName = new BehaviorSubject('Chaman');

  onSaveProduct(products: any[]) {
   // return this.http.post(this.url, products);
    //return this.http.put(this.url, products, {headers: this.headers});
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
