import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}
  getQuotes() {
    return this.http.get('/assets/quotes.json').toPromise();
  }
}
