import {Component, inject, input} from '@angular/core';
import {Expense} from '../../../../interfaces';
import {ThemeService} from '../../../services/theme.service';

@Component({
  selector: 'app-expense-card',
  imports: [],
  templateUrl: './expense-card.html',
  styleUrl: './expense-card.css',
})
export class ExpenseCard {
  expense = input.required<Expense>();
  themeService = inject(ThemeService);
}
