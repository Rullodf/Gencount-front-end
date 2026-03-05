import {Component, input} from '@angular/core';
import {User} from '../services/user.service';

@Component({
  selector: 'add-button',
  template: `<button>aggiungi</button>`,
  styles: ``,
  imports:[]
})export class AddButton{
  gencountId = input.required<number>();
  users = input.required<User[]>();
}
