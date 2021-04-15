import { Injectable } from "@angular/core";

import { Book } from "../model/book";
import { Observable, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BookService {
    url = "http://localhost:4200/assets/data/books.json";
    constructor(private http: HttpClient){}

    getBooksWithPromise(): Promise<Book[]> {
        return this.http.get(this.url).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorPromise)
    }
    private extractData(res: Response) {
        //let body = res.json();
        let p = JSON.stringify(res);
        let pp = JSON.parse(p);
        let body = pp;
        return body;
    }
    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error)
        return Promise.reject(error.message || error);
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error)
        return Observable.throw(error.message || error);
    }
    getBooksWithObservable(): Observable<Book[]> {
        // return this.http.get(this.url)
        // .map(this.extractData)
        // .catch(this.handleErrorObservable);
        return this.http.get(this.url).
        pipe(
            map(this.extractData), 
            catchError( error => {
              return throwError(this.handleErrorObservable);
            })
          )
    }
    // in-memory-data-api example
    // getAllBooks(): Observable<Book[]> {
    //     // return this.http.get(this.url)
	// 	//         .map(this.extractData)
    //     //         .catch(this.handleError);
    //     return this.http.get(this.url).
    //     pipe(
    //         map(this.extractData), 
    //         catchError(this.handleErrorObservable)
    //       )
    // }
	// getBookById(bookId: string): Observable<Book[]> {
	// 	let myHeaders = new Headers();
	// 	myHeaders.append('Content-Type', 'application/json');    
	// 	let myParams = new URLSearchParams();
	// 	myParams.append('id', bookId);			
    //     let options = new RequestOptions({ headers: myHeaders, params: myParams });
    //     // return this.http.get(this.url, options)
	// 	//         .map(this.extractData)
    //     //         .catch(this.handleError);
    //     return this.http.get(this.url, options).pipe(
    //         map(this.extractData), 
    //         catchError(this.handleErrorObservable)
    //     )
    // }
	// getBooksAfterFilter(catg: string, wtr: string): Observable<Book[]> {
	// 	let myHeaders = new Headers();
	// 	myHeaders.set('Content-Type', 'application/json');   
    //     // let myParams = new URLSearchParams(); //until 4
    //     let myParams = new HttpParams();
	// 	myParams.set('category', catg);
	// 	myParams.set('writer', wtr);		
    //     let options = new HttpRequestOptions({ headers: myHeaders, params: myParams });
    //     // return this.http.get(this.url, options)
	// 	//         .map(this.extractData)
    //     //         .catch(this.handleError);
    //     return this.http.get(this.url, options).pipe(
    //         map(this.extractData),
    //         catchError(this.handleErrorObservable)
    //     )
    // }

}