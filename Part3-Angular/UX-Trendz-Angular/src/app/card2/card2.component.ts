import { Component, OnInit } from '@angular/core';
import { MessageService } from '../appServices/message.service';
import { ServiceUtitlitiesService } from '../appServices/service-utitlities.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private message:ServiceUtitlitiesService) { }

  // product = "card2";
  product = {};
  
  ngOnInit() {
    this.product = this.message.product;
  }
//without service
  // messageAlert(){
  //   alert("Thanks for subscribe. We will get in touch with you shortly");
  // }

  //without DI
  // btnClick() {
  //   const msgService = new MessageService();
  //   msgService.messageAlert();
  // }

  //with DI
  btnClick() {
    this.message.messageAlert();
  }

  
}
