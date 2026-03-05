import {Component, inject, Inject, input} from '@angular/core';
import {GencountService} from '../services/gencountService';
import {User} from '../services/user.service';

@Component({
  selector: 'remove-button',
  template: `<button (click)="removeFromCount()">rimuovi</button>`,
  styles: ``,
})export class removeButton{
  gencountId = input.required<number>();
  users = input.required<User[]>();
  gencountService = inject(GencountService);

  protected removeFromCount() {
    this.gencountService.removeUsers(this.users(), this.gencountId()).subscribe({})
  }
}
