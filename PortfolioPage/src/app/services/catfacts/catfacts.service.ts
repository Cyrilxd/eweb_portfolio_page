import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {CatFact} from "./catfact.model";

@Injectable({
  providedIn: 'root'
})


export class CatfactsService {

  constructor(private http: HttpClient) {}

  // Fetch fact from an API (replace with actual API URL if needed)
  getFactFromApi(): Observable<CatFact> {
    // Replace with your API endpoint if fetching from a server
    const apiUrl = 'https://catfact.ninja/fact';
    return this.http.get<CatFact>(apiUrl);
  }
}
