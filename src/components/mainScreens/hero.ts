import {Component, inject} from '@angular/core';
import {LoginCredentials, UserService} from '../services/user.service';
import {ThemeService} from '../services/theme.service';
import {LoginButton} from '../buttons/loginButton';
import {RegisterButton} from '../buttons/registerButton';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'hero',
  template: `
    <div id="login-screen">
      <div id="presentation">
        <img src="imgs/logo.png" id="logo" alt="Logo del sito">
        <img src="imgs/presentation-pic.png" id="presentation-pic" alt="Foto di presentazione">
      </div>
      <div id="user-box">
        <div id="catch-phrase">Un solo posto per gestire tutte le tue spese</div>
        <div id="buttons-container">
          <form #productForm="ngForm" (ngSubmit)=login()>
            <input type="text" class="loginScreenTextField" placeholder="Email" [(ngModel)]="email" name="email">
            <input type="password" class="loginScreenTextField" placeholder="Password" [(ngModel)]="password"
                   name="password">
            <login-button/>
          </form>
          <a href="">Forgot password?</a>
          <register-button (evento)="gotoRegisterScreen()"/>
        </div>
      </div>
    </div>`,
  imports: [
    LoginButton,
    RegisterButton,
    FormsModule
  ],
  styles: `
    #user-box {
      background-color: var(--md-sys-color-surface-container);
      min-height: 100vh;
      max-width: 600px;
      width: 40%;
      margin: 0 0;
    }

    #presentation {
      min-width: 60%;
      background-color: var(--md-sys-color-surface);
      margin: 0 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #login-screen {
      display: flex;
    }

    #buttons-container {
      height: 60%;
      display: flex;
      justify-content: center;
      gap: 20px;
      align-items: center;
      flex-direction: column;
    }

    #logo {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 100px;
    }

    #presentation-pic {
    }

    #catch-phrase {
      height: 40%;
      border-bottom: 1px solid var(--md-sys-color-outline);
    }

    form {
      display: flex;
      flex-direction: column;
    }
  `
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
}
