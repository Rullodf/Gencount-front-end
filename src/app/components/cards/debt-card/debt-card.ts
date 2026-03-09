import {Component, inject, input, signal} from '@angular/core';
import {Debt, User} from '../../../../interfaces';
import {ThemeService} from '../../../services/theme.service';

@Component({
  selector: 'app-debt-card',
  imports: [],
  templateUrl: './debt-card.html',
  styleUrl: './debt-card.css',
})
export class DebtCard {
  debt = input.required<Debt>();
  users = input.required<User[]>();
  currentUser = JSON.parse(localStorage.getItem('user')!);
  isPayingUser = signal<boolean>(true);
  themeService = inject(ThemeService);

  ngOnInit() {
    this.isPayingUser.set( this.currentUser.userId == this.debt().payingUserId);
  }

  getOtherUser(id: number) {
    return this.users().find(u => u.userId == id)!;
  }

  protected readonly Math = Math;
}
