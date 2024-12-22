import {Component, OnInit} from '@angular/core';
import {HttpcodeapiService} from "../services/httpcode/httpcodeapi.service";
import {CatfactsService} from "../services/catfacts/catfacts.service";
import { CatFact } from '../services/catfacts/catfact.model';
import {CatpicService} from "../services/catpicture/catpic.service";
import {TemplateCardComponent} from "../template-card/template-card.component";
import {CommonModule} from "@angular/common";
import {CvComponent} from "../cv/cv.component";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  standalone: true,
  imports: [TemplateCardComponent, CommonModule, CvComponent]
})
export class PortfolioComponent implements OnInit{


  imageUrl: string | null = null;
  imageUrlCatPic: string = '';

  catFact : CatFact | null = null;
  constructor(private httpCodeApiService: HttpcodeapiService, private catFactService: CatfactsService, private catPicService: CatpicService) {}

  ngOnInit() {
    this.loadHttpCodeMeme();
    this.loadCatFAct();
    this.loadCatPicture();
  }

  loadCatFAct(): void{
    this.catFactService.getFactFromApi().subscribe(( data: CatFact) => {
      this.catFact = data;
    })
  }
  loadHttpCodeMeme(): void {
    this.httpCodeApiService.loadStatusCodes().subscribe((codes) => {
      const randomCode = this.httpCodeApiService.getRandomStatusCode(codes);
      this.httpCodeApiService.getHttpCatImage(randomCode).subscribe((blob) => {
        this.imageUrl = this.createBlobUrl(blob);
      });
    });
  }
  loadCatPicture(): void {
    this.imageUrlCatPic = this.catPicService.getRandomCatImage()
  }

  private createBlobUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  }

  private createBlobUrlCatPic(blob: Blob): string {
    return URL.createObjectURL(blob);
  }
}
