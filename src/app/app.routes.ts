import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'experience',
  component: ExperienceComponent
}];
