import {Component} from '@angular/core';
import {RegisterForm} from '../forms/registerForm';

@Component({
  selector: 'registration-screen',
  imports: [RegisterForm],
  template: `
    <div>
      <register-form/>
    </div>
  `,
  styles: ``
})
export class RegistrationScreen {}
