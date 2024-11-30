import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CatpicService {



  private readonly apiUrl = 'https://cataas.com/cat'; // will be proxied to: 'https://http.cat' -> chatgpt is cooking lol


  constructor(private http: HttpClient) {}


  getRandomCatImage(): Observable<Blob> {
    const url = `${this.apiUrl}`;
    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError((error) => {
        console.error(`Fehler beim Laden des Katzenbildes :( }:`, error);
        throw error;
      })
    );
  }
}
