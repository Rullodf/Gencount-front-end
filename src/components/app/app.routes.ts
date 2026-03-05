import { Routes } from '@angular/router';
import {Hero} from '../mainScreens/hero';
import {RegistrationScreen} from '../mainScreens/registrationScreen';
import { UserList } from '../forms/findUser';

export const routes: Routes = [
  {path: '', component: Hero},
  {path: 'register-user', component: RegistrationScreen},
  {path: 'friends',component:UserList}
];

