import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  currentItem = 'Television';
  items = ['item1', 'item2', 'item3', 'item4'];
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem: string) {
    this.items.push(newItem);
    console.log(this.items);
  }

}
