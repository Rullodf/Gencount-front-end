import { Routes } from '@angular/router';
import {Hero} from './pages/hero/hero';
import {RegistrationScreen} from './components/mainScreens/registrationScreen';
import { GencountListComponent } from './pages/gencount-list/gencountList';


import { UserList } from './components/forms/user-list/user-list';
import {GencountCreateComponent} from './pages/gencount-create/gencount-create';
import {GencountDetailComponent} from './pages/gencount-detail/gencount-detail';
import {CreateExpense} from './components/forms/create-expense/create-expense';
export const routes: Routes = [
  {path: '', component: Hero},
  {path: 'register-user', component: RegistrationScreen},
  {path: 'gencounts', component: GencountListComponent },
  {path:'friends', component: UserList},
  {path:'expense-create', component: CreateExpense},
  {
    path: 'gencount/new',
    component: GencountCreateComponent
   },
  {
    path: 'gencount/:id',
    component: GencountDetailComponent
  }
];

