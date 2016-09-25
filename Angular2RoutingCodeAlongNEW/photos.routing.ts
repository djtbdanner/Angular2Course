import {Router, RouterModule} from '@angular/router';
import {PhotosComponent} from './photos.component';
import {PhotoDetailsComponent} from './photo-details.component';

export const photosRouting =RouterModule.forRoot([

    { path: 'photos', component: PhotosComponent },
    { path: 'photos/:id', component: PhotoDetailsComponent }

]);