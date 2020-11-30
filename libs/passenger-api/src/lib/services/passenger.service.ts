import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Passenger } from '../models/passenger';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  passenger: Passenger[] = [];
  baseUrl = `http://www.angular.at/api`;

  constructor(private http: HttpClient) {
  }

  load(): Observable<Passenger[]> {
    const url = [this.baseUrl, 'passenger'].join('/');

    return this.http.get<Passenger[]>(url);
  }
}
