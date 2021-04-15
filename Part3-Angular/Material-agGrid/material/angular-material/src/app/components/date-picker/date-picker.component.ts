import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  minDate = new Date();//date starts from 0
  maxDate = new Date(2020,12,24);//date ends

  minDate2 = new Date(1989,2-1,12);
  maxDate2 = new Date(2020,12-1,24);

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
  constructor(
    private dateAdapter: DateAdapter<Date>) {
      this.dateAdapter.setLocale('en-GB');//dd/mm/yyyy
    }

  ngOnInit(): void {
  }

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
}
