import { Routes } from '@angular/router';
import {Hero} from '../mainScreens/hero';
import {RegistrationScreen} from '../mainScreens/registrationScreen';
import { GencountListComponent } from '../mainScreens/gencountList';
export const routes: Routes = [
  {path: '', component: Hero},
  {path: 'register-user', component: RegistrationScreen},
  {path: 'gencounts', component: GencountListComponent },
];

