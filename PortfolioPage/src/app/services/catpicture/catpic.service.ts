import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CatpicService {

  private readonly apiUrl: string = 'https://cataas.com/cat'; // will be proxied to: 'https://http.cat' -> chatgpt is cooking lol

  getRandomCatImage(): string{
   return this.apiUrl
  }
}
