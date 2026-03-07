import {Component, inject} from '@angular/core';
import {ThemeService} from '../../../components/services/theme.service';
import {LoginButton} from '../../../components/buttons/loginButton';
import {RegisterButton} from '../../../components/buttons/registerButton';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginCredentials} from '../../../interfaces';
import {UserService} from '../../../components/services/user.service';
import {LucideAngularModule, Sun} from 'lucide-angular';

@Component({
  selector: 'hero',
  templateUrl: './hero.html',
  imports: [
    LoginButton,
    RegisterButton,
    FormsModule,
    LucideAngularModule
  ],
  styleUrls: ["hero.css"]
})
export class Hero {
  userService = inject(UserService);
  themeService = inject(ThemeService);
  email = '';
  password = '';
  router = inject(Router);

  login() {
    let credentials: LoginCredentials = {email: this.email, password: this.password};
    console.log(credentials)
    this.userService.login(credentials).subscribe({
        next: () => {
          this.router.navigate(['/gencounts']);
          console.log('logged in')
        },
        error: err => {
          console.log(err)
        }
      }
    );
  }

  gotoRegisterScreen() {
    this.router.navigate(['/register-user'])
  }

  protected readonly Sun = Sun;
}
