import { Routes } from '@angular/router';
import {Hero} from '../../app/pages/hero/hero';
import {RegistrationScreen} from '../mainScreens/registrationScreen';
import { GencountListComponent } from '../../app/pages/gencountList/gencountList';


import { UserList } from '../forms/findUser';
import {GencountCreateComponent} from '../../app/pages/gencount-create/gencount-create';
import {GencountDetailComponent} from '../../app/pages/gencount-detail/gencount-detail';
export const routes: Routes = [
  {path: '', component: Hero},
  {path: 'register-user', component: RegistrationScreen},
  {path: 'gencounts', component: GencountListComponent },
  {path:'friends', component: UserList},
  {
    path: 'gencount/new',
    component: GencountCreateComponent
   },
  {
    path: 'gencount/:id',
    component: GencountDetailComponent
  }
];

