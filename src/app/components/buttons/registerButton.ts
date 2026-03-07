import {Component, input, output} from '@angular/core';

@Component({
  selector: 'register-button',
  template: `<button (click)="buttonClicked()" type="submit" class="on-surface">Sign up</button>`,
  styles: `
    button {
      width: 100%;
      height: 100%;
      border:none;
      font-size: 1.2rem;
      font-family: sans-serif;
    }
  `
})
export class RegisterButton {
  evento = output();
  buttonClicked() {
     this.evento.emit()
   }
}
