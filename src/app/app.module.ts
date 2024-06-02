import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { NewsCodComponent } from './news-cod/news-cod.component';
import { NewsGtaComponent } from './news-gta/news-gta.component';
import { NewsCs2Component } from './news-cs2/news-cs2.component';
import { NewsMultiVersusComponent } from './news-multi-versus/news-multi-versus.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    NewsCodComponent,
    NewsGtaComponent,
    NewsCs2Component,
    NewsMultiVersusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
