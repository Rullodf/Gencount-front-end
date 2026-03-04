import {Component} from '@angular/core';

@Component({
  selector: 'register-button',
  template: `<button>Join in</button>`,
  styles: `button {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    width: 80%;
    height: 50px;
    border-radius: 20px;
    font-size: 1.2rem;
    font-family: sans-serif;
    border: none;
  }`
})
export class RegisterButton {

}
