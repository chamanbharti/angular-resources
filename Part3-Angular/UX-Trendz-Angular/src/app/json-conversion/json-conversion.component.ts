import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-json-conversion',
  templateUrl: './json-conversion.component.html',
  styleUrls: ['./json-conversion.component.css']
})
export class JsonConversionComponent implements OnInit {
  // product = {
  //   name: "Mobile",
  //   id: "002"
  // };

  products = [
    { id: 'p1', name: 'Laptop', price: 1400},
    { id: 'p2', name: 'Mobile', price: 6000}

  ];
  product2;
  product3 = [];
  // url = 'https://ux-datastorage.firebaseio.com/products.json';
  url = ' https://http-complete-guide.firebaseio.com/products.json';
  constructor(private http: HttpClient) {
    // this.http.get(this.url).toPromise().then(data => {
    //   console.log('using toPromise():' + data);
    //   for(let key in data) {
    //     if (data.hasOwnProperty(key))
    //       this.product3.push(data[key]);
    //   }
    // });
    // console.log('products3:' + this.product3);
  }

  ngOnInit() {
    // console.log(this.products);
    // this.product2 = JSON.stringify(this.products);
    // console.log(this.product2);
    // console.log(JSON.parse(this.product2));
  }
  fetchProducts() {
   return this.http.get(this.url);
  }
  onFetchProducts() {
   this.fetchProducts()
     .subscribe(
       (response) => {
         console.log(response);
         // this.product2 = this.products
         // console.log(this.product2);
         const data = JSON.stringify(response);
         console.log(data);
         this.products = JSON.parse(data);
         console.log(this.products);
       }
     );
  }

}
