import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { HomeAboutUsComponent } from './home/home-about-us/home-about-us.component';
import { HomeServicesComponent } from './home/home-services/home-services.component';
import { HomeStudioComponent } from './home/home-studio/home-studio.component';
import { HomeGalleryComponent } from './home/home-gallery/home-gallery.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PooComponent } from './poo/poo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeBannerComponent,
    HomeAboutUsComponent,
    HomeServicesComponent,
    HomeStudioComponent,
    HomeGalleryComponent,
    PooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
