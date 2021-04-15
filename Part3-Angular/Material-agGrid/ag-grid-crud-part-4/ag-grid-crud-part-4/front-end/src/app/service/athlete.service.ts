import {Injectable} from '@angular/core';
import { Athlete } from '../model/athlete.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catch } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  private apiUrl = 'http://localhost:8080/athletes';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Athlete[]> {
    return this.http.get(this.apiUrl)
    .map(
          res => res
    )
    .catch(
            (error: any) => Observable.throw(error || 'Server error')
    );
  }
}
