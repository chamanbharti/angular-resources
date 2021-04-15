import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class PostsService {
    url = 'https://udemy-http-works.firebaseio.com/posts.json';
    error = new Subject<string>();
    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string){
        const postData: Post = {title: title, content: content}
        this.http
        .post<{name: string}>(this.url,postData)
        .subscribe( responseData => {
          console.log(responseData);
        }, error => {
            this.error.next(error.message)
        });
    }
    fetchPosts() {
        // return this.http.get<{[key: string]: Post}>(this.url)
        // .pipe(
        //   map( responseData => {
        //     const postsArray: Post[] = [];
        //     for(const key in responseData){
        //       //postsArray.push(responseData[key])
        //      if(responseData.hasOwnProperty(key)){
        //         postsArray.push({...responseData[key], id: key});
        //      }
        //     }
        //     return postsArray;
        //   }),
        //   catchError(errorRes => {
        //       //Send to analytics server
        //     return  throwError(errorRes);
        //   })
        // );
        // .subscribe(posts => {
        //   //console.log(posts);
        // });

        //handling Header
        return this.http.get<{[key: string]: Post}>(this.url,
          {
            headers: new HttpHeaders({'Custom-Header': 'Hello'})
          })
        .pipe(
          map( responseData => {
            const postsArray: Post[] = [];
            for(const key in responseData){
              //postsArray.push(responseData[key])
             if(responseData.hasOwnProperty(key)){
                postsArray.push({...responseData[key], id: key});
             }
            }
            return postsArray;
          }),
          catchError(errorRes => {
              //Send to analytics server
            return  throwError(errorRes);
          })
        );
    }
    deletePosts() {
        return this.http.delete(this.url);
    }
}