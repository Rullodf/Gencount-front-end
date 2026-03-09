import {Component, inject, input, signal} from '@angular/core';
import {Expense} from '../../../interfaces';
import {ExpensesService} from '../../services/expenses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'expenses-list',
  imports: [],
  templateUrl: './expenses-list.html',
  styleUrl: './expenses-list.css',
})
export class ExpensesList {
  expensesService = inject(ExpensesService);
  router = inject(Router);
  expenses = signal<Expense[]|null>(null);
  gencountId=input.required<number>();

  ngOnInit() {
    this.expensesService.getExpensesByGencountId(this.gencountId()).subscribe({
      next: (expenses) => {
        this.expenses.set(expenses)
      }
    })
  }


}
