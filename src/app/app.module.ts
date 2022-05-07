import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FactCheckingComponent } from './fact-checking/fact-checking.component';
import { HandleNewsComponent } from './handle-news/handle-news.component';
import { ReportNewsComponent } from './report-news/report-news.component';
import { SpotNewsComponent } from './spot-news/spot-news.component';
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { CasesComponent } from './cases/cases.component';
import { Details1Component } from './cases/details1/details1.component';
import { Details2Component } from './cases/details2/details2.component';
import { Details3Component } from './cases/details3/details3.component';
import { Details4Component } from './cases/details4/details4.component';
import { Details5Component } from './cases/details5/details5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    FactCheckingComponent,
    HandleNewsComponent,
    ReportNewsComponent,
    SpotNewsComponent,
    ResourcesPageComponent,
    CasesComponent,
    Details1Component,
    Details2Component,
    Details3Component,
    Details4Component,
    Details5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
