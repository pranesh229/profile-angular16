import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ReachOutComponent } from './reach-out/reach-out.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'reach-out',
  component: ReachOutComponent
},
{
  path: 'experience/:experienceId',
  component: ExperienceComponent
}];
