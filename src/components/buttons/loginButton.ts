import {Component, inject} from '@angular/core';
import {ThemeService} from '../services/theme.service';

@Component({
  selector: 'login-button',
  template: `
      <button type="submit" class="primary on-primary">Sign in</button>,
  `,
  styles: `
    button {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      font-size: 1.2rem;
      font-family: sans-serif;
      border: none;
      font-weight: bold;
    }
  `
})
export class LoginButton {
  themeService = inject(ThemeService);
}
