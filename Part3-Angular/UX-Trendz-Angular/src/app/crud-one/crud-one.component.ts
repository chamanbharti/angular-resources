import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-crud-one',
  templateUrl: './crud-one.component.html',
  styleUrls: ['./crud-one.component.css']
})
export class CrudOneComponent implements OnInit {
  loadedPosts = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }
  onCreatePost(postData: {title: string, content: string}) {
    // console.log(postData);
    // send http request
    this.http.post('https://http-complete-guide.firebaseio.com/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
  onFetchPosts() {
    this.fetchPosts();
  }
  private fetchPosts() {
    // this.http.get('https://http-complete-guide.firebaseio.com/posts.json')
    //   .subscribe(posts => {
    //     console.log(posts);
    //   });
    this.http.get('https://http-complete-guide.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({...responseData[key], id: key});
            }
          }
          return postArray;
        })
      )
      .subscribe(posts => {
        console.log(posts);
      });
  }
}
