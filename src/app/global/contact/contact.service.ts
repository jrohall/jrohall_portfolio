import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api = 'https://api.example.com/contact';
  constructor(private http: HttpClient) { }
  PostMessage(input: any) {
    return this.http.post(this.api, input, {responseType: 'text'}).pipe(
      map(
        (response: any) => {
          if (response){
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
