import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeService} from '../services/theme.service';
import {LoginButton} from '../buttons/loginButton';
import {RegisterButton} from '../buttons/registerButton';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterButton, LoginButton],
  template: `
    <div id="login-screen">
      <div id="presentation">
        <img src="imgs/logo.png" id="logo" alt="Logo del sito">
        <img src="imgs/presentation-pic.png" id="presentation-pic" alt="Foto di presentazione">
      </div>
      <div id="user-box">
        <div id="catch-phrase">Un solo posto per gestire tutte le tue spese</div>
        <div id="buttons-container">
          <register-button />
          <login-button />
        </div>
      </div>
    </div>
  `,
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
      position: absolute;
      right: 60px;
      bottom: 60px;
      width: 70%;
    }
    #catch-phrase {
    height: 40%;
      border-bottom: 1px solid var(--md-sys-color-outline);
    }
  `,
})
export class App {
  constructor(private themeService: ThemeService) {
  }
  protected readonly title = signal('Gencount');
}
