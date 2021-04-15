import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from '../appServices/products.service';

@Component({
  selector: 'app-crud-two',
  templateUrl: './crud-two.component.html',
  styleUrls: ['./crud-two.component.css']
})
export class CrudTwoComponent implements OnInit {

 //  dataTitle = 'Bharti Products';
  dataTitle = this.productService.dataTitle();
  fetching = false;
  @ViewChild('id', {static: false}) id: ElementRef;
  @ViewChild('name', {static: false}) name: ElementRef;
  @ViewChild('price', {static: false}) price: ElementRef;
  editMode: boolean = false;
  editIndex: number;
  products = [
    {
      id: 'p1',
      name: 'Laptop',
      price: 4500
    },
    {
      id: 'p2',
      name: 'Washing Machine',
      price: 15000
    },
    {
      id: 'p3',
      name: 'Mobile',
      price: 25000
    },
    {
      id: 'p4',
      name: 'TV',
      price: 4500
    }
  ];
  // constructor(private http: HttpClient) { }
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.onFetchProduct();
  }
  onAddProduct(id, name, price) {
    debugger
    // for add product
    // this.products.push(
    //   {
    //     id: id.value,
    //     name: name.value,
    //     price: price.value
    //   }
    // );
    // for edit or  update
    if (this.editMode) {
      console.log(this.products[this.editIndex]);
      this.products[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value
      };
      this.editMode = false;
      this.id.nativeElement.value = ''
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
    } else {
      this.products.push(
        {
          id: id.value,
          name: name.value,
          price: price.value
        }
      );
    }
    this.onSaveProduct();
  }
  // @ts-ignore
  onSaveProduct() {
    debugger
    this.productService.onSaveProduct(this.products)
      .subscribe((responseData) => console.log(responseData),
        (err) => console.log(err)
      );
  }
  onFetchProduct() {
     // this.products = this.products;
    this.fetching = true;
    this.productService.fetchProducts().subscribe(
      (response) => {
        console.log(response);
        const data = JSON.stringify(response);
        console.log(data);
        this.products = JSON.parse(data);
        this.fetching = false;
      },
      error => console.log(error)
    );
  }

  onEditProduct(index: number) {
    this.editMode = true;
    // console.log(this.products[index]);
    // console.log(this.products[index].id);
    this.editIndex = index;
    this.id.nativeElement.value = this.products[index].id
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
  }
  onDeleteProduct(id) {
    console.log(id);
    if (confirm('Do you want to delete this product?')) {
       this.products.splice(id, 1);
      // this.productService.deleteProducts().subscribe();
       this.onSaveProduct();
    }
  }

}
