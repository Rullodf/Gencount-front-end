import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'register-form',
  imports: [FormsModule],
  template: `
    <form #productForm="ngForm" (ngSubmit)="registerUser()">
      <label for="nome">
        <input type="text" id="nome" placeholder="Nome" [(ngModel)]="name"/>
      </label>
      <label for="cognome">
        <input type="text" id="cognome" placeholder="Cognome" [(ngModel)]="surname"/>
      </label>
      <label for="male">
        <input type="radio" name="gender" id="male" value="m" [(ngModel)]="gender"/> M
      </label>
      <label for="female">
        <input type="radio" name="gender" id="female" value="f" [(ngModel)]="gender"/> F
      </label>
      <label for="phone">
        <input type="text" id="phone" placeholder="Telefono" [(ngModel)]="phone"/>
      </label>
      <label for="email">
        <input type="text" id="email" placeholder="Email" [(ngModel)]="email"/>
      </label>
      <label for="password">
        <input type="password" id="password" placeholder="Password" [(ngModel)]="password"/>
      </label>
    </form>
  `,
  styles: `
  `
})
export class RegisterForm {
  name = '';
  surname = '';
  gender = '';
  email = '';
  password = '';
  phone = '';
  birthday = '';
  birthmonth = '';
  birthyear = '';

  constructor(private userSevice: UserService) {
  }

  registerUser() {
    this.userSevice.register({
      id: 0,
      name: this.name,
      surname: this.surname,
      gender: this.gender,
      email: this.email,
      password: this.password,
      phone: this.phone,
      dateOfBirth: this.birthday + '-' + this.birthmonth + '-' + this.birthyear
    })
  }
}
