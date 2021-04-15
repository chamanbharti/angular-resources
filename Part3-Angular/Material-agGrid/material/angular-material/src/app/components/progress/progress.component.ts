import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  notification = 0;
  showSpinner = false;

  constructor() { }

  ngOnInit(): void {
  }
  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

}
