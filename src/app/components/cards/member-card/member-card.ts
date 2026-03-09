import {Component, input} from '@angular/core';
import {User} from '../../../../interfaces';

@Component({
  selector: 'app-member-card',
  imports: [],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css',
})
export class MemberCard {
  member = input.required<User>();
}
