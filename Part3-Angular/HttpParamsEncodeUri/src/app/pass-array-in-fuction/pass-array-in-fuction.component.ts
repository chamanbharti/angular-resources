import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-array-in-fuction',
  templateUrl: './pass-array-in-fuction.component.html',
  styleUrls: ['./pass-array-in-fuction.component.css']
})
export class PassArrayInFuctionComponent implements OnInit {
  //https://stackoverflow.com/questions/40493085/how-to-pass-an-array-as-a-url-parameter
  constructor() { }

  ngOnInit(): void {
    debugger
  }
  arrayToPass = [1, "Two", 3]; 
  myArray = ['aaa', 'bbb', 'ccc', ];

myArrayQry = this.myArray.map(function(el, idx) {
    return 'myArray[' + idx + ']=' + el;
}).join('&');

		passToFunction() { 
      debugger
      // this.unmodifiableFunction.apply(null, this.arrayToPass); 
      // this.unmodifiableFunction(...arrayToPass); 
		} 
	
		unmodifiableFunction(a, b, c) { 
      debugger
      console.log(this.myArrayQry);
			console.log("First value is: ", a); 
			console.log("Second value is: ", b); 
			console.log("Third value is: ", c); 
		} 

}
