import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { QuiesoyComponent } from './components/quiesoy/quiesoy.component';
import { VideosComponent } from './components/videos/videos.component';
import { ColaborarComponent } from './components/colaborar/colaborar.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { ContentComponent } from './components/content/content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    HomeComponent,
    QuiesoyComponent,
    VideosComponent,
    ColaborarComponent,
    FotosComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
