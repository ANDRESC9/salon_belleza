import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent {
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      375: {
        items: 1,
        center: false,
      },
      425: {
        items: 1,
        center: false,
      },
      450: {
        items: 3,
        margin: 40,
      },
      500: {
        items: 3,
      },
      576: {
        items: 3,
        margin: 60
      },
      768: {
        items: 3,
        margin: 60
      },
      990: {
        items: 3,
        margin: 90
      },
      1290: {
        items: 3,
        margin: 120
      },
      1800: {
        items: 3,
        margin: 150
      }
    },
    nav: true
  };
}
