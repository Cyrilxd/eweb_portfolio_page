import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpCodesComponent } from './http-codes/http-codes.component';
import {TemplateCardComponent} from "./template-card/template-card.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    FooterComponent,
    HobbiesComponent,
    PortfolioComponent,
    HttpCodesComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        TemplateCardComponent,
        HttpClientModule,
        CommonModule,
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
