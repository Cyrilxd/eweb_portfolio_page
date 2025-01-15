import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DogpicService {

  private readonly dogApiUrl: string = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}


  // Get a random dog image
  getRandomDogImage(): Observable<string> {
    return this.http.get<{ message: string; status: string }>(this.dogApiUrl).pipe(
      map(response => response.message), // Extract the image URL from the response
      catchError(this.handleError<string>('getRandomDogImage', 'assets/default-dog.png')) // Fallback to a default dog image
    );
  }

  // Centralized error handling
  private handleError<T>(operation = 'operation', result: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result); // Return the fallback result
    };
  }

}
