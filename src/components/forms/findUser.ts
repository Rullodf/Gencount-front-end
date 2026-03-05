import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../services/user.service';
import {FormsModule} from '@angular/forms';
import {GencountService} from '../services/gencount.service';

@Component({
  selector: 'find-user',
  template: `
    <div>
      <form #form="ngForm" class="form" (ngSubmit)="handleSubmit()">
        @for (user of friends(); track $index) {
          <div class="friend-container">
            <label class="info" [for]="user.userId">
              {{ user.name }}
              {{ user.surname }}
            </label>
            <input type="checkbox" [id]="user.userId" class="checkbox"/>
          </div>
        }
        <button id="seleziona" type="submit">
          @if (isAdding()) {
            aggiungi
          } @else {
            rimuovi
          }
        </button>
      </form>
    </div>`,
  styles: `
    .form {
      display: flex;
      flex-direction: column;
    }

    .friend-container {
      display: grid;
      height: 45px;
      border-radius: 10px;
      grid-template-columns: 1fr 60px;
    }

    .friend-container:hover {
      background-color: grey;
    }

    .info {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 1.3rem;
      padding-left: 10px;
    }
  `,
  imports: [CommonModule, FormsModule],
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
