import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SertificatesComponent } from './sertificates/sertificates.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { MassageComponent } from './services/massage/massage.component';
import { CarbonPeelingComponent } from './services/carbon-peeling/carbon-peeling.component';
import { EndosphereComponent } from './services/endosphere/endosphere.component';
import { HairDeletionComponent } from './services/hair-deletion/hair-deletion.component';
import { TattooRemovalComponent } from './services/tattoo-removal/tattoo-removal.component';
import { VesselsRemovalComponent } from './services/vessels-removal/vessels-removal.component';



export const routes: Routes = [
    { path: '', component: MainPageComponent},
    { path: 'carbon-peeling', component: CarbonPeelingComponent},
    { path: 'endosphere', component: EndosphereComponent},
    { path: 'hair-deletion', component: HairDeletionComponent},
    { path: 'massage', component: MassageComponent},
    { path: 'tattoo-removal', component: TattooRemovalComponent},
    { path: 'vessels-removal', component: VesselsRemovalComponent},

];
