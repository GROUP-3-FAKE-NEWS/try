import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [{path:'home-page', component:HomePageComponent},
                        {path:'about-page', component:AboutPageComponent},
                        {path:'fact-checking', component:FactCheckingComponent},
                        {path:'handle-news', component:HandleNewsComponent},
                        {path:'report-news', component:ReportNewsComponent},
                        {path:'spot-news', component:SpotNewsComponent},
                        {path: 'resources-page', component: ResourcesPageComponent},
                        {path: 'details1', component:Details1Component},
                          {path: 'details2', component:Details2Component},
                          {path: 'details3', component:Details3Component},
                          {path: 'details4', component:Details4Component},
                          {path: 'details5', component:Details5Component},
                          {path: 'cases', component:CasesComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
