import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AddButton} from '../buttons/AddButton';
import{removeButton} from '../buttons/removeButton';
import { User, UserService } from '../services/user.service';

@Component({
  selector: 'find-user',
  template: ` <div>
    @for (user of friends(); track $index) {
      <div>
        <label [for]="user.userId">
          {{ user.name }}
          {{ user.surname }}
        </label>
        <input type="checkbox" unchecked [id]="user.userId" />
      </div>
    }
    @if (isAdding()) {
      <add-button />
    } @else {
      <remove-button/>
    }
  </div>`,
  styles: ``,
  imports: [CommonModule, removeButton, AddButton],
})
export class UserList {
  friends = signal<User[]>([]);
  constructor(private userService: UserService) {
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
  isAdding = input(false);
}
