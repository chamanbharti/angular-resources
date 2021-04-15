import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  url = `https://reqres.in/api/users`;
  constructor(private http: HttpClient) { }
  getUsers() {
    debugger
    return this.http.get(this.url).
    pipe(
      map( (data: Users[]) => {
        return data;
      }), catchError( error => {
        return throwError('Something went wrong!');
      })
    )
  }
  createUsers(user: Users[]){
    debugger
    return this.http.post(this.url,user).
    pipe(
      map( (data:any) => {
        return data;
      }), catchError( error => {
        return throwError('Something went wrong!');
      })
    )
  }
}
