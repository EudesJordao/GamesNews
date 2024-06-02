import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewsCodComponent } from './news-cod/news-cod.component';
import { NewsGtaComponent } from './news-gta/news-gta.component';
import { NewsCs2Component } from './news-cs2/news-cs2.component';
import { NewsMultiVersusComponent } from './news-multi-versus/news-multi-versus.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'newsCod', component: NewsCodComponent},
  {path: 'newsGta', component: NewsGtaComponent},
  {path: 'newsCs2', component: NewsCs2Component},
  {path: 'newsMultiVersus', component: NewsMultiVersusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
