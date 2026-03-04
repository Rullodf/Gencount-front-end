import {Component} from '@angular/core';

@Component({
  selector: 'login-button',
  template: `<button type="submit">Sign in</button>`,
  styles: `
    button {
      background-color: var(--md-sys-color-tertiary);
      color: var(--md-sys-color-on-tertiary);
      width: 80%;
      height: 50px;
      border-radius: 20px;
      font-size: 1.2rem;
      font-family: sans-serif;
      border: none;
    }
  `
})
export class LoginButton {

}
