import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvComponent} from "./cv/cv.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
  // Routes
  { path: 'portfolio', component: PortfolioComponent },

  // Errors
  //{ path: 'error404', component: Error404Component },

  // Common Routes
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' }, // Redirects to /tracks as the default route
  //{ path: '**', redirectTo: '/error404', pathMatch: 'full' }, // Wildcard route for a 404 page, redirected to /artists
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
