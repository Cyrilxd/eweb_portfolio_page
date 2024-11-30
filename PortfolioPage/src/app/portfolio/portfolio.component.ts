import {Component, OnInit} from '@angular/core';
import {HttpcodeapiService} from "../services/httpcode/httpcodeapi.service";
import {CatfactsService} from "../services/catfacts/catfacts.service";
import { CatFact } from '../services/catfacts/catfact.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{


  imageUrl: string | null = null;
  catFact : CatFact | null = null;
  constructor(private httpCodeApiService: HttpcodeapiService, private catFactService: CatfactsService) {}

  ngOnInit() {
    this.loadHttpCodeMeme();
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

  private createBlobUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  }
}
