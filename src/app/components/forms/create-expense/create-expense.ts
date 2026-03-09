import {Component, inject} from '@angular/core';
import {ExpensesService} from '../../../services/expenses.service';
import {Expense, User} from '../../../../interfaces';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-expense',
  imports: [
    FormsModule
  ],
  templateUrl: './create-expense.html',
  styleUrl: './create-expense.css',
})
export class CreateExpense {
  isFormSubmitted = false;
  router = inject(Router);
  creditor = JSON.parse(localStorage.getItem('user')!) as User
  gencountId = this.router.currentNavigation()?.extras.state?.['gencountId'] as number
  title = '';
  price = '0';
  description = '';


  expensesService = inject(ExpensesService);

  submit() {
    let expense = {
      title: this.title,
      price: parseInt(this.price),
      description: this.description,
      creditorId: this.creditor.userId,
      creditorName: this.creditor.name,
      creditorSurname: this.creditor.surname,
      gencountId: this.gencountId,
      expenseId: 0
    } as Expense
    if (!this.isFormSubmitted) {
      this.isFormSubmitted = true;
      this.expensesService.createExpense(expense).subscribe({
        next: (expense) => {
          this.router.navigate(['/gencount', this.gencountId], {state: {gencountId: this.gencountId}})
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
}
