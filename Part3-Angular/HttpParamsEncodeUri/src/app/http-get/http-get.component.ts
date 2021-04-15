import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent implements OnInit {
  userName: string = "tektutorialshub"
  baseURL: string = "https://api.github.com/";
  repos: Repos[];
  loading: boolean = false;
  errorMessage;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getRepos();
  }
  getRepos() : Observable<Repos[]> {
    debugger
    this.loading = true;
    this.errorMessage = "";
    const params = new HttpParams()
      .set('sort', "description")
      .set('page',"2");
      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this.http.get<Repos[]>(this.baseURL+'users/'+this.userName+"/repos", 
    { 'params': params, 'headers': headers, withCredentials: true })
    .pipe(
      map((response) => {
        return response;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }
}
export class Repos {
  id: string;
  name: string;
  html_url: string;
  description: string;
}
