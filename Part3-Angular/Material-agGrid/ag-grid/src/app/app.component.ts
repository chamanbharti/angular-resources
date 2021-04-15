import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ag-grid';

  //columnDefs = [
    // using js
      // {headerName: 'Make', field: 'make', sortable: true, filter: true },
      // {headerName: 'Model', field: 'model', sortable: true, filter: true },
      // {headerName: 'Price', field: 'price', sortable: true, filter: true}
      // using  [enableSorting]="true" in htm file
  // ];

  // rowData = [
  //     { make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];
  
//   columnDefs = [
//       {headerName: 'Make', field: 'make'},
//       {headerName: 'Model', field: 'model'},
//       {headerName: 'Price', field: 'price'}
//   ];
//   appendableSeqObject  = {
//     headerName: '',
//     field: ''
//  };
//  removeColumnFromCustomerHistoryArray() {
//   debugger
//   const user = this.columnDefs.find(item => item.headerName === 'Model');
//   // this.appendableSeqObject.headerName = user.headerName;
//   // this.appendableSeqObject.field = user.field;
//   this.appendableSeqObject.headerName = 'Chaman';
//   this.appendableSeqObject.field = 'model';
//   // this.columnDefs.splice(1, 1, this.appendableSeqObject);
//   this.columnDefs.splice(1, 1);
//  }
 
//   rowData: any;
//   constructor(private http: HttpClient) {
//     // this.removeColumnFromCustomerHistoryArray();
//   }
//   ngOnInit() {
//     debugger
//     this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
//   }
  
  // @ViewChild('agGrid') agGrid: AgGridAngular;
  columnDefs = [
      // using  [enableSorting]="true" in htm file
      {headerName: 'Make', field: 'make', resizable: true},
      {headerName: 'Model', field: 'model'},
      {headerName: 'Price', field: 'price'}
  ];
  rowData: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    debugger
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
  // getSelectedRows() {
  //   debugger
  //   const selectedNodes = this.agGrid.api.getSelectedNodes();
  //   const selectedData = selectedNodes.map( node => node.data );
  //   const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
  //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
  // }

  // gridOptions: GridOptions;
  // columnDefs: any[];
  // rowData: any[];
  // constructor(private http: HttpClient){

  // }
  // this.http.get<any>('http://localhost/api/v1/employees').subscribe(
  //   data => {
  //     this.rowData = data;
  // },
  // (err: HttpErrorResponse) => {
  //   if (err.error instanceof Error) {
  //     console.log("Client-side error occured.");
  //   } else {
  //     console.log("Server-side error occured.");
  //   }
  // });

  // this.columnDefs = [
  //   {headerName: "Employee Name", field: "employee_name"},
  //   {headerName: "Employee Salary", field: "employee_salary"},
  //   {headerName: "Employee Age", field: "employee_age"}
  // ];
}
