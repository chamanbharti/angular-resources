import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  notification = 20;
  notification2 = 0;
  hidden = false;
  simpleContent = 'Chaman';
  overlap = true;
  disabled = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleBadgeVisibility(){
    this.hidden = !this.hidden;
  }
}
