import {Component, input, output, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from '../../../services/user.service';
import {FormsModule} from '@angular/forms';
import {GencountService} from '../../../services/gencount.service';
import {use} from 'chai';
import {User} from '../../../../interfaces';

@Component({
  selector: 'user-list',
  template: `
    <div>
      <form #form="ngForm" class="form" (ngSubmit)="handleSubmit()">
        <div class="user-list">
          @for (user of listOfPeople(); track $index) {
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
  styleUrls: ['user-list.css'],
  imports: [CommonModule, FormsModule],
})
export class UserList {
  checkboxClicked = output<HTMLInputElement>();
  //TODO: metterli required dopo
  isAdding = input<boolean | null>(null);
  gencountId = input(-1);
  listOfPeople = input.required<User[]>();

  constructor(private userService: UserService, private gencountService: GencountService) {

  }


  handleSubmit() {
    if (this.isAdding()) {
      this.gencountService.addUsers(this.listOfPeople().map(u => u.userId), this.gencountId()).subscribe({})
    } else {
      this.gencountService.removeUsers(this.listOfPeople().map(u=>u.userId), this.gencountId()).subscribe({})
    }
  }

  sendOut(event: Event) {
    this.checkboxClicked.emit(event.target! as HTMLInputElement)
  }

  protected readonly use = use;
}
