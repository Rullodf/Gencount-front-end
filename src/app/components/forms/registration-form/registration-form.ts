import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Observable, range} from 'rxjs';
import {RegisterButton} from '../../buttons/registerButton';
import {Router} from '@angular/router';
import {ThemeService} from '../../../services/theme.service';

@Component({
  selector: 'register-form',
  imports: [FormsModule, RegisterButton],
  templateUrl: 'registration-form.html',
  styleUrls: ['registration-form.css']
})
export class RegistrationForm {
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
  themeService = inject(ThemeService);

  constructor(private userSevice: UserService, private router: Router) {
  }

  registerUser() {
    let user = {
      userId: 0,
      name: this.name,
      surname: this.surname,
      gender: this.gender,
      email: this.email,
      password: this.password,
      phone: this.phone,
      dateOfBirth: this.birthyear + '-'
        + this.fixMonoChar(this.birthmonth) + '-' + this.fixMonoChar(this.birthday)
    }
    console.log(user);
    this.userSevice.register(user).subscribe({
      next: () => {
        this.router.navigate([''])
        console.log('user registered')
      },
      error: err => {
        console.log(err)
      }
    })
  }

  fixMonoChar(s: string){
    if (s.length == 1){
      return '0' + s
    }
    return s
  }

  updateDays() {
    if (parseInt(this.birthmonth) == 2 && parseInt(this.birthyear) % 4 == 0) {

      this.days = Array.from({length: 29}, (_, i) => i + 1);
      return
    }
    this.days = Array.from({length: this.daysInMonth[parseInt(this.birthmonth) - 1]}, (_, i) => i + 1);
  }

  firstDaySelect = true;
  firstMonthSelect = true;
  firstYearSelect = true;
  isFirstDaySelect(){
    if (this.firstDaySelect){
      this.firstDaySelect = false;
      return true
    }
    return false
  }

  isFirstMonthSelect(){
    if (this.firstMonthSelect){
      this.firstMonthSelect = false;
      return true
    }
    return false
  }
  isFirstYearSelect(){
    if (this.firstYearSelect){
      this.firstYearSelect = false;
      return true
    }
    return false
  }
}
