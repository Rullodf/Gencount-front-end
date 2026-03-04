import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Observable, range} from 'rxjs';
import {RegisterButton} from '../buttons/registerButton';

@Component({
  selector: 'register-form',
  imports: [FormsModule, RegisterButton],
  template: `
    <form #productForm="ngForm" (ngSubmit)="registerUser()">
      <input type="text" name="email" id="email" placeholder="Email" [(ngModel)]="email"/>
      <input type="password" name="password" id="password" placeholder="Password" [(ngModel)]="password"/>
      <input type="text" name="nome" id="nome" placeholder="Nome" [(ngModel)]="name"/>
      <input type="text" name="cognome" id="cognome" placeholder="Cognome" [(ngModel)]="surname"/>
      <input type="text" name="phone" id="phone" placeholder="Telefono" [(ngModel)]="phone"/>
      <div>
        <label for="male">
          <input type="radio" name="gender" id="male" value="m" [(ngModel)]="gender"/> M
        </label>
        <label for="female">
          <input type="radio" name="gender" id="female" value="f" [(ngModel)]="gender"/> F
        </label>
      </div>
      <div>
        <select [(ngModel)]="birthday" name="birthday">
          @for (day of days; track day) {
            <option [value]="day">{{ day }}</option>
          }
        </select>
        <select [(ngModel)]="birthmonth" name="birthmonth" (ngModelChange)="updateDays()">
          @for (month of months; track month) {
            <option [value]="month">{{ month }}</option>
          }
        </select>
        <select [(ngModel)]="birthyear" name="birthyear" (ngModelChange)="updateDays()">
          @for (year of years; track year) {
            <option [value]="year">{{ year }}</option>
          }
        </select>
      </div>
      <register-button />
    </form>
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
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
  currentYear = new Date().getFullYear();
  days = Array.from({length: 31}, (_, i) => i + 1);
  months = Array.from({length: 12}, (_, i) => i + 1);
  years = Array.from(
    {
      length: this.currentYear - 1920 + 1
    },
    (_, i) => this.currentYear - i
  );
  daysInMonth = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ]

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
    }).subscribe({
      next: () => {
        console.log('user registered')
      },
      error: err => {
        console.log(err)
      }
    })
  }


  updateDays(){
    if(parseInt(this.birthmonth) == 2 && parseInt(this.birthyear) % 4 == 0){

      this.days = Array.from({length: 29}, (_, i) => i + 1);
      return
    }
    this.days = Array.from({length: this.daysInMonth[parseInt(this.birthmonth) - 1]}, (_, i) => i + 1);
  }

  protected readonly range = range;
}
