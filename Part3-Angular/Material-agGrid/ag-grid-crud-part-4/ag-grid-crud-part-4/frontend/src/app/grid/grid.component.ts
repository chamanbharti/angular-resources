import {Component, ElementRef, ViewChild} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {ColDef, ColumnApi, GridApi} from 'ag-grid';
import {AthleteService} from '../services/athlete.service';
import {Athlete} from '../model/athlete.model';
import {StaticDataService} from '../services/static-data.service';
import {Country} from '../model/country.model';
// we need to import this as we're making use of enterprise features, such as the richSelect cell editor
import 'ag-grid-enterprise';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent {

    // row data and column definitions
    private rowData: Athlete[];
    private columnDefs: ColDef[];

    // gridApi and columnApi
    private api: GridApi;
    private columnApi: ColumnApi;

    //inject the athleteService
    constructor(private athleteService:AthleteService) {
        this.columnDefs = this.createColumnDefs();
    }

    //on init, subscribe to the athlete data
    ngOnInit() {
        this.athleteService.findAll().subscribe(
            athletes => {
                this.rowData = athletes
            },
            error => {
                console.log(error);
            }
        )
    }

    //on grid initialization, grap the apis and auto resize the column to fit the available space
    onGridReady(params): void {
        this.api = params.api;
        this.columnApi = params.columnApi;
        this.api.sizeColumnsToFit();
    }

    //create some simple definitions
    private createColumnDefs() {
        return [
            {field:'id'},
            {field:'name'},
            {field:'country', valueGetter: (params) => params.data.country.name},
            {field:'results', valueGetter: (params) => params.data.results.length}
        ]
    }

   
}
