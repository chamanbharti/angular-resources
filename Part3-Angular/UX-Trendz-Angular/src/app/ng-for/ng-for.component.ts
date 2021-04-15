import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  products = [
    {proimg:'https://4.imimg.com/data4/BB/XD/MY-26240794/apple-mac-pc-laptop-computers-500x500.jpg',name:'Laptop',id:'pro01',price:15000},
    {proimg:'https://st1.bgr.in/wp-content/uploads/2017/03/86cc63060202ff01193b4b6389f582c3_375x500_1.jpg',name:'Mobile',id:'pro02',price:8000},
    {proimg:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTbT9Yxc5Zx_XRktj7Q8RrS9X1YWCq2XCYtq1i7puncJ2AziJPQoA5CjlBS3e-Iug6afJg6zVSJlNWbuWYsa4Igpc3Q0zvkrHs-ThxMbEVlu33Y8I9eZsUIS4E&usqp=CAc',name:'TV',id:'pro03',price:12000},
    {proimg:'https://rukminim1.flixcart.com/image/704/704/jgffp8w0/washing-machine-new/w/a/f/fh0fandnl02-lg-original-imaf4z4g6sbhp7yt.jpeg?q=70',name:'Washing Machine',id:'pro04',price:20000}
  ]

  users= [];

  onCreateUser(uname){
    console.log(uname);
    this.users.push({
     // name:uname.target.value
       name:uname.value
    });

    if(this.users.length>3){
      //alert('More than 3');
      this.router.navigate(['products']);
    }
    
  }

  onRemoveUser(){
    //this.users.splice(this.users.length -1 );
    this.users.pop();
  }

  onRemoveItem(item){
    this.users.splice(item,2);
  }
  

}
