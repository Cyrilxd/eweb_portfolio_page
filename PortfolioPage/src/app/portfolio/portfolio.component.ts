import {Component, OnInit} from '@angular/core';
import {HttpcodeapiService} from "../services/httpcode/httpcodeapi.service";
import {CatfactsService} from "../services/catfacts/catfacts.service";
import { CatFact } from '../services/catfacts/catfact.model';
import {TemplateCardComponent} from "../template-card/template-card.component";
import {CommonModule} from "@angular/common";
import {CvComponent} from "../cv/cv.component";
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {DogpicService} from "../services/dogpicture/dogpic.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  standalone: true,
  imports: [TemplateCardComponent, CommonModule, CvComponent]
})
export class PortfolioComponent implements OnInit {

  imageUrl: string | null = null;
  imageUrlDog: string = '';
  catFact: CatFact | null = null;

  constructor(
    private httpCodeApiService: HttpcodeapiService,
    private catFactService: CatfactsService,
    private dogpicService: DogpicService
  ) {}

  ngOnInit() {
    this.loadHttpCodeMeme();
    this.loadCatFact();
    this.loadDogPicture();
  }

  loadCatFact(): void {
    this.catFactService.getFactFromApi()
      .pipe(
        catchError(error => {
          console.error('Error fetching cat fact:', error);
          return of(null); // Return a default value or an observable
        })
      )
      .subscribe((data: CatFact | null) => {
        this.catFact = data;
      });
  }

  loadHttpCodeMeme(): void {
    this.httpCodeApiService.loadStatusCodes()
      .pipe(
        catchError(error => {
          console.error('Error loading status codes:', error);
          return of([]); // Return a default empty array
        })
      )
      .subscribe((codes) => {
        if (codes.length > 0) {
          const randomCode = this.httpCodeApiService.getRandomStatusCode(codes);
          this.httpCodeApiService.getHttpCatImage(randomCode)
            .pipe(
              catchError(error => {
                console.error('Error fetching HTTP cat image:', error);
                return of(null); // Return null if image fails
              })
            )
            .subscribe((blob) => {
              if (blob) {
                this.imageUrl = this.createBlobUrl(blob);
              }
            });
        }
      });
  }

  loadDogPicture(): void {
    this.dogpicService.getRandomDogImage().subscribe({
      next: (url) => {
        this.imageUrlDog = url; // Assign the image URL to display in the template
      },
      error: (error) => {
        console.error('Error fetching dog picture:', error);
        this.imageUrlDog = 'assets/default-dog.png'; // Fallback in the component
      }
    });
  }

  private createBlobUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  }
}
