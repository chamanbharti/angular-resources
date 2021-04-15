import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { QueryList } from '@angular/core/src/render3';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { CriteriaComponent } from '../shared/criteria/criteria.component';
import { ProductParamterService } from './product-paramter.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
    pageTitle: string = 'Product List';
    //listFilter: string;
   // showImage: boolean;
    //sending child component
    includeDetail: boolean = true;
   // @ViewChild(CriteriaComponent) filterComponent: CriteriaComponent;
    parentListFilter: string;
    //using setter & getter
    // private _listFilter: string;
    // get listFilter(): string {
    //     return this._listFilter;
    // }
    // set listFilter(value: string) {
    //     this._listFilter = value;
    //     this.performFilter(this.listFilter);
    // }
    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;

    filteredProducts: IProduct[];
    products: IProduct[];

    //using Viewchild
    // @ViewChild('input') filterElementRef;
    // @ViewChild('filterElement') filterElementRef;
    // @ViewChild('filterElement') filterElementRef: ElementRef;

    // @ViewChildren('filterElement, nameElement') 
    // inputElementRefs: QueryList<ElementRef>;

    // @ViewChildren(NgModel) 
    // inputElementRefs: QueryList<NgModel>;

    // @ViewChild('filterElement') filterElementRef: ElementRef;
    // @ViewChildren(NgModel) filterInput: NgModel;
   // @ViewChild(NgModel) filterInput: NgModel;
   
   // private _filterInput: NgModel;
    // private _sub: Subscription;
    // get filterInput(): NgModel{
    //     return this._filterInput;
    // }
    // @ViewChild(NgModel)
    // set filterInput(value: NgModel){
    //     this._filterInput = value;
    //     // this.filterInput.valueChanges.subscribe(
    //     //     () => this.performFilter(this.listFilter)
    //     // );
    //     // this.filterElementRef.nativeElement.focus();
    //     console.log(this.filterInput);
    //     if(this.filterInput && !this._sub){
    //         console.log('Subscribing');
    //         this._sub = this.filterInput.valueChanges.subscribe(
    //          () => {
    //              this.performFilter(this.listFilter)
    //              console.log('Performed the filter');
    //          }
    //         );
    //     }
    //     if(this.filterElementRef){
    //         this.filterElementRef.nativeElement.focus();
    //     }
    // }

    //using service to maintain state
    get showImage(): boolean {
        return this.productParamterService.showImage;
    }
    set showImage(value: boolean) {
        this.productParamterService.showImage = value;
    }
    @ViewChild(CriteriaComponent) filterComponent: CriteriaComponent;

    constructor(private productService: ProductService, private productParamterService: ProductParamterService) {
        // console.log(this.filterElementRef);
     }
     ngAfterViewInit(): void {
        //console.log(this.filterElementRef);

       // this.filterElementRef.nativeElement.focus();
        // if(this.filterElementRef.nativeElement){
        //     this.filterElementRef.nativeElement.focus();
        // }

        //console.log(this.inputElementRefs);

        // console.log(this.filterInput);
        // this.filterElementRef.nativeElement.focus();

        // this.filterInput.valueChanges.subscribe(
        //     () => this.performFilter(this.listFilter)
        // );
        // this.filterElementRef.nativeElement.focus();

        this.parentListFilter = this.filterComponent.listFilter;
     }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (products: IProduct[]) => {
                this.products = products;
                // this.performFilter(this.listFilter);
                //this.performFilter(this.parentListFilter);
                this.filterComponent.listFilter = this.productParamterService.filterBy;
            },
            (error: any) => this.errorMessage = <any>error
        );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy?: string): void {
        if (filterBy) {
            this.filteredProducts = this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
        } else {
            this.filteredProducts = this.products;
        }
    }
    // onFilterChange(filter: string): void {
    //     this.listFilter = filter;
    //     this.performFilter(this.listFilter);
    // }

    onValueChange(value: string) {
        this.productParamterService.filterBy = value;
        this.performFilter(value);
    }
}
