import { Routes } from '@angular/router';
import {Hero} from '../mainScreens/hero';
import {RegistrationScreen} from '../mainScreens/registrationScreen';
import { GencountListComponent } from '../mainScreens/gencountList';
import {GencountCreateComponent} from '../../app/pages/gencount-create/gencount-create';
import {GencountDetailComponent} from '../../app/pages/gencount-detail/gencount-detail';
export const routes: Routes = [
  {path: '', component: Hero},
  {path: 'register-user', component: RegistrationScreen},
  {path: 'gencounts', component: GencountListComponent },
  {
    path: 'gencount/new',
    component: GencountCreateComponent
   },
  {
    path: 'gencount/:id',
    component: GencountDetailComponent
  }
];

