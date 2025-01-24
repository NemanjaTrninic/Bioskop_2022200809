import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'search', component: SearchComponent},

];
