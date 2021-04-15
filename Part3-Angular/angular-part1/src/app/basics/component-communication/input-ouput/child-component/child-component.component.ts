import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() item: string; // decorate the property with @Input()
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
