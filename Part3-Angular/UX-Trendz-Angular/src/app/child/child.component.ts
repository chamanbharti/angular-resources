import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() placeholderText: string = 'abc';

 @Input() productSelected: boolean = false ;
 @Input() selectedProduct: string;
 @Output() addedProduct = new EventEmitter<any>(); // for parent to use

  onSelectProduct(product) {
    this.productSelected = true;
    this.selectedProduct = product;
  }

  onAddProduct(){
    this.addedProduct.emit(this.selectedProduct);
  }

  myValue: string = 'Mamta';
  myText:  string = 'I love Mamta';
}
