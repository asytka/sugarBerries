import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), {
    provide: GALLERY_CONFIG,
    useValue: {
      autoHeight: true,
      imageSize: 'cover'
    } as GalleryConfig
  }]
};
