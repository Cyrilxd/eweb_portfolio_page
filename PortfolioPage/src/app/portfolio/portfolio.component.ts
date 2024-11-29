import {Component, OnInit} from '@angular/core';
import {HttpcodeapiService} from "../services/httpcode/httpcodeapi.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{


  imageUrl: string | null = null;

  constructor(private httpCodeApiService: HttpcodeapiService) {}

  ngOnInit() {
    this.loadHttpCodeMeme();
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
