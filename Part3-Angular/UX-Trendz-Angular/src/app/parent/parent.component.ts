import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // productSelected:boolean = false ;
  // selectedProduct:string
  // addedProduct:any;

  //using from child
  productSelected:boolean = false ;
  selectedProduct:string
  addedProduct:any;

  onSelectProduct(product) {
    this.productSelected = true;
    this.selectedProduct = product;
  }

  // using @Output
  onAddProduct(proData) {
    this.addedProduct = proData;

  }

  // onAddProduct(){
  //   this.addedProduct = this.selectedProduct;
  // }

  // myValue:string = 'Mamta';
  // myText: string = 'I love Mamta';


}
