import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AddButton} from '../buttons/AddButton';
import{removeButton} from '../buttons/removeButton';
import { User, UserService } from '../services/user.service';
import {FormsModule} from '@angular/forms';
import {GencountService} from '../services/gencountService';

@Component({
  selector: 'find-user',
  template: `
    <div>
      <form #form="ngForm" (ngSubmit)="handleSubmit()">
        @for (user of friends(); track $index) {
          <label [for]="user.userId">
            {{ user.name }}
            {{ user.surname }}
          </label>
          <input type="checkbox" unchecked [id]="user.userId"/>
        }
        <button id="seleziona" type="submit">
          @if (isAdding()) {
            agginugi
          } @else {
            rimuovi
          }
        </button>
      </form>
    </div>`,
  styles: ``,
  imports: [CommonModule, removeButton, AddButton, FormsModule],
})
export class UserList {
  friends = signal<User[]>([]);
  constructor(private userService: UserService, private gencountService: GencountService) {
    this.userService.getFriends().subscribe({
      next: (data) => {
        this.friends.set(data);
        setTimeout(() => {
          console.log(this.friends);
        }, 8000);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //TODO: metterli required dopo
  isAdding = input(false);
  gencountId = input(0);

  handleSubmit(){
    if (this.isAdding()){
      this.gencountService.addUsers(this.friends(), this.gencountId()).subscribe({})
    }
    else {
      this.gencountService.removeUsers(this.friends(), this.gencountId()).subscribe({})
    }
  }
}
