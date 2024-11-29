import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpcodeapiService {
  private readonly apiUrl = 'https://http.cat/'; // Base URL der API
  private readonly filePath = 'assets/HTTP_Status_Codes.txt'; // Pfad zur Datei

  private cachedStatusCodes: number[] | null = null; // Cache für Statuscodes

  constructor(private http: HttpClient) {}

  /**
   * Lädt ein Bild für den angegebenen HTTP-Statuscode von der API.
   * @param statusCode Der HTTP-Statuscode
   * @returns Observable, das ein Blob mit dem Bild liefert
   */
  getHttpCatImage(statusCode: number): Observable<Blob> {
    const url = `${this.apiUrl}${statusCode}`;
    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError((error) => {
        console.error(`Fehler beim Laden des Bildes für Code ${statusCode}:`, error);
        throw error;
      })
    );
  }

  /**
   * Gibt einen zufälligen HTTP-Statuscode aus einer Liste zurück.
   * @param codes Array von HTTP-Statuscodes
   * @returns Ein zufälliger HTTP-Statuscode
   */
  getRandomStatusCode(codes: number[]): number {
    const randomIndex = Math.floor(Math.random() * codes.length);
    return codes[randomIndex];
  }

  /**
   * Lädt die HTTP-Statuscodes aus der Textdatei und gibt sie als Array zurück.
   * Verwendet einen Cache, um wiederholtes Laden zu vermeiden.
   * @returns Observable mit einer Liste von HTTP-Statuscodes
   */
  loadStatusCodes(): Observable<number[]> {
    if (this.cachedStatusCodes) {
      return of(this.cachedStatusCodes); // Verwende den Cache, falls verfügbar
    }

    return this.http.get(this.filePath, { responseType: 'text' }).pipe(
      map((data) => this.extractCodes(data)),
      map((codes) => {
        this.cachedStatusCodes = codes; // Cache speichern
        return codes;
      }),
      catchError((error) => {
        console.error('Fehler beim Laden der Statuscodes:', error);
        throw error;
      })
    );
  }

  /**
   * Extrahiert HTTP-Statuscodes aus einer Textdatei.
   * @param fileContent Inhalt der Textdatei
   * @returns Array von HTTP-Statuscodes
   */
  private extractCodes(fileContent: string): number[] {
    return fileContent
      .split('\n') // In Zeilen aufteilen
      .map((line) => line.trim()) // Leerzeichen entfernen
      .filter((line) => /^[0-9]{3}/.test(line)) // Zeilen mit HTTP-Codes filtern
      .map((line) => parseInt(line.split(' ')[0], 10)); // Nur den numerischen Code extrahieren
  }
}
