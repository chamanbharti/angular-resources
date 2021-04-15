import { Component, OnInit } from '@angular/core';
import { MessageService } from '../appServices/message.service';
import { ServiceUtitlitiesService } from '../appServices/service-utitlities.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private message:ServiceUtitlitiesService) { }

  // product = "card";
  product = {};
  
  ngOnInit() {
    // this.product = this.message.product;
    this.message.product().subscribe(productData=>this.product = productData);
  }

  //without service
  // messageAlert(){
  //   alert("Thanks for subscribe. We will get in touch with you shortly");
  // }


  //without using dependency injection
  // btnClick(){
  //   const msgService = new MessageService();
  //   msgService.messageAlert();
  // }

  //with Dependency injection
  btnClick(){
    this.message.messageAlert();
  }

  
}
