import {Component, inject, input} from '@angular/core';
import {ExpensesService} from '../../../services/expenses.service';
import {Expense, User} from '../../../../interfaces';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UserList} from '../user-list/user-list';

@Component({
  selector: 'app-create-expense',
  imports: [
    FormsModule,
    UserList
  ],
  templateUrl: './create-expense.html',
  styleUrl: './create-expense.css',
})
export class CreateExpense {
  isFormSubmitted = false;
  partecipants: User[];
  gencountId: number;
  creditor = JSON.parse(localStorage.getItem('user')!) as User
  title = '';
  price = '0';
  description = '';
  expensesService = inject(ExpensesService);
  addingList: number[] = [];

  constructor(private router: Router,) {
    this.partecipants = router.currentNavigation()?.extras.state?.['partecipants'] as User[]
    this.gencountId = this.router.currentNavigation()?.extras.state?.['gencountId'] as number
  }

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
          console.log(expense)
          this.expensesService.putUsers(this.addingList, expense.expenseId).subscribe(
            () => this.router.navigate(['/gencount', this.gencountId], {state: {gencountId: this.gencountId}})
          )
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  addToAddingList(event: HTMLInputElement) {
    if (event.checked) {
      this.addingList.push(parseInt(event.value))
    } else {
      this.addingList = this.addingList.filter(e => e != parseInt(event.value))
    }
    console.log(this.addingList);
  }
}
