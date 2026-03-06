import {Component, input, output, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from '../services/user.service';
import {FormsModule} from '@angular/forms';
import {GencountService} from '../services/gencount.service';
import {use} from 'chai';
import {User} from '../../interfaces';

@Component({
  selector: 'find-user',
  template: `
    <div>
      <form #form="ngForm" class="form" (ngSubmit)="handleSubmit()">
        <div class="friend-list">
          @for (user of friends(); track $index) {
            <label [for]="user.userId" class="friend-container">
              <div class="info">
                {{ user.name }}
                {{ user.surname }}
              </div>
              <input type="checkbox" [id]="user.userId" [value]="user.userId" class="checkbox"
                     (change)="sendOut($event)"/>
              <span class="quadratino"></span>
            </label>
          }
        </div>
        @if (isAdding() != null) {
          <button id="seleziona" type="submit">
            @if (isAdding()) {
              aggiungi
            } @else {
              rimuovi
            }
          </button>
        }
      </form>
    </div>`,
  styleUrls: ['findUser.css'],
  imports: [CommonModule, FormsModule],
})
export class UserList {
  friends = signal<User[]>([]);
  checkboxClicked = output<HTMLInputElement>();
  //TODO: metterli required dopo
  isAdding = input<boolean | null>(null);
  gencountId = input(-1);

  constructor(private userService: UserService, private gencountService: GencountService) {
    this.userService.getFriends().subscribe({
      next: (data) => {
        this.friends.set(data.sort((a, b) => a.surname.toLowerCase().localeCompare(b.surname.toLowerCase()))
          .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())));
        setTimeout(() => {
          console.log(this.friends);
        }, 8000);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  handleSubmit() {
    if (this.isAdding()) {
      this.gencountService.addUsers(this.friends().map(u => u.userId), this.gencountId()).subscribe({})
    } else {
      this.gencountService.removeUsers(this.friends().map(u=>u.userId), this.gencountId()).subscribe({})
    }
  }

  sendOut(event: Event) {
    this.checkboxClicked.emit(event.target! as HTMLInputElement)
  }

  protected readonly use = use;
}
