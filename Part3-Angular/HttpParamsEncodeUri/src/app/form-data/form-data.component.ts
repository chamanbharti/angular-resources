import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
// https://html.developreference.com/article/11635151/Angular+6+http+post+request+with+x-www-form-urlencoded+data
// https://coderwall.com/p/uqttoa/post-x-www-form-urlencoded-data-with-restangular
// https://dev.to/getd/x-www-form-urlencoded-or-form-data-explained-in-2-mins-5hk6
// https://documenter.getpostman.com/view/7455569/S1Lu3ViG?version=latest#cdd16d0e-c379-4bec-9c66-f67ecdc6a9b9


// https://stackoverflow.com/questions/16104078/appending-array-to-formdata-and-send-via-ajax

//https://stackoverflow.com/questions/6243051/how-to-pass-an-array-within-a-query-string

// /https://www.javascripture.com/FormData
//https://community.postman.com/t/sending-an-array-as-form-data/4606/4
//https://gist.github.com/ghinda/8442a57f22099bdb2e34.
//https://hashnode.com/post/append-array-of-objects-to-formdata-cjg9yi4uv001ap8s2kmkq3gmt
export class FormDataComponent implements OnInit {
  name:string;
  constructor() {
    debugger
    this.name = 'Angular2'
    var formData = new FormData;
    var arr = ['this', 'is', 'an', 'array'];
    for (var i = 0; i < arr.length; i++) {
        formData.append('arr[]', arr[i]);
        console.log(JSON.stringify(formData));
    }
  }
  // getFormUrlEncoded(toConvert) {
	// 	const formBody = [];
	// 	for (const property in toConvert) {
	// 		const encodedKey = encodeURIComponent(property);
	// 		const encodedValue = encodeURIComponent(toConvert[property]);
	// 		formBody.push(encodedKey + '=' + encodedValue);
	// 	}
	// 	return formBody.join('&');
	// }
  ngOnInit(){
  //   console.log('test');
  //   var fd = new FormData();
  //   fd.append('field', 'value');
  //   const field = {field: 'value'};
  
  //   // successful request
  //   this.http.post('http://google.com', fd)
  //    .subscribe(() => console.log("request done with success"));
     
  //    // failed request
  //   this.http.post('http://google2.com', this.getFormUrlEncoded(field),
  //   {headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}))
  //    .subscribe(() => console.log("request done with success"));
  // }
}
}
