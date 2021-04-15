import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.css']
})
export class HttpObservableComponent implements OnInit {

  constructor(private userService: UsersService) { }
  users = {};
  ngOnInit() {
    this.userService.user()
    .subscribe( usersData => {
      this.users = usersData
    })
  }

}
