import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
 // numbers = [1, 2, 3, 4, 5];
oddNumber = [1, 3, 5];
evenNumber = [2, 4];
onlyOdd = false;
value;
  constructor() { }

  ngOnInit(): void {
  }

}
