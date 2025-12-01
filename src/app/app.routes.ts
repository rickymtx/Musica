import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListenComponent } from './pages/listen/listen.component';
import { StudioComponent } from './pages/studio/studio.component';   

export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'listen', component: ListenComponent},
    {path: 'studio', component: StudioComponent}
];
