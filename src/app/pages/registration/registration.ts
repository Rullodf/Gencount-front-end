import {Component} from '@angular/core';
import {RegistrationForm} from '../../components/forms/registration-form/registration-form';

@Component({
  selector: 'registration-screen',
  imports: [RegistrationForm],
  template: `
    <div>
      <register-form/>
    </div>
  `,
  styles: ``
})
export class Registration {}
