import { Component, OnInit } from '@angular/core';
import { Users } from '../../model/users';
import { ApicallService } from '../../service/apicall.service';

@Component({
  selector: 'get1',
  templateUrl: './get1.component.html',
  styleUrls: ['./get1.component.css']
})
export class Get1Component implements OnInit {
  users: Users[]; //for get method
  user: any = {}; // for post method
  constructor(private apiService: ApicallService) { }

  ngOnInit() {
    this.getUserList();
  }
  getUserList(){
    debugger
    this.apiService.getUsers()
    .subscribe( (data: any) =>{
      console.log(data);
      this.users = data.data;
    })
  }
  createUser() {
    debugger
    this.apiService.createUsers(this.users).
    subscribe(
      (res) => {
        console.log(res)
      });
  }

}
