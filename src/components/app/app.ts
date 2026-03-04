import {Component, inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeService} from '../services/theme.service';
import {LoginButton} from '../buttons/loginButton';
import {RegisterButton} from '../buttons/registerButton';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterButton, LoginButton, FormsModule],
  template: `
    <router-outlet />
  `,
  styles: `

  `,
})
export class App {

  constructor(private themeService: ThemeService) {

  }

  protected readonly title = signal('Gencount');
}
