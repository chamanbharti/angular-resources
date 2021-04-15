import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  url = 'https://udemy-http-works.firebaseio.com/posts.json';
  isFetching = false;
  error = null;
  private errorSub: Subscription;
  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    //this.fetchPosts();
    //using a service for Http Requests

    //using error 
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe( posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onCreatePost(postData: Post) {
    // console.log(postData)
    // // Send Http request
    // this.http
    // .post<{name: string}>(this.url,postData)
    // .subscribe( responseData => {
    //   console.log(responseData);
    // });

    //using a service for Http Requests
    this.postsService.createAndStorePost(postData.title,postData.content);
  }

  onFetchPosts() {
    // Send Http request
    //this.fetchPosts();
    //using a service for Http Requests
    //this.postsService.fetchPosts();

    // this.isFetching = true;
    // this.postsService.fetchPosts().subscribe( posts => {
    //   this.isFetching = false;
    //   this.loadedPosts = posts;
    // });

    //handling error
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe( posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error)
    });
  }

  onClearPosts() {
    // Send Http request
    console.log('called')
    // this.http.delete(this.url).subscribe(); //for all deletes

    //using a service for Http Requests
    this.postsService.deletePosts().subscribe( 
      () => {
        this.loadedPosts = [];
      }
    )
  }
  // private fetchPosts() {
  //   this.http.get(this.url)
  //   .pipe(
  //     map(responseData => {
  //       const postsArray = [];
  //       for(const key in responseData){
  //         //postsArray.push(responseData[key])
  //        if(responseData.hasOwnProperty(key)){
  //           postsArray.push({...responseData[key], id: key})
  //        }
  //       }
  //       return postsArray;
  //     })
  //   )
  //   .subscribe(posts => {
  //     console.log(posts);
  //   });
  // }
  //
  // private fetchPosts() {
  //   this.isFetching = true;
  //   this.http.get<{[key: string]: Post}>(this.url)
  //   .pipe(
  //     map( (responseData: {[key: string]: Post}) => {
  //       const postsArray: Post[] = [];
  //       for(const key in responseData){
  //         //postsArray.push(responseData[key])
  //        if(responseData.hasOwnProperty(key)){
  //           postsArray.push({...responseData[key], id: key})
  //        }
  //       }
  //       return postsArray;
  //     })
  //   )
  //   .subscribe(posts => {
  //     //console.log(posts);
  //     this.isFetching = false;
  //     this.loadedPosts = posts;
  //   });
  // }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
  onHandleError() {
    this.error = null;
  }

}
