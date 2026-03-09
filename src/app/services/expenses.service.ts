import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {expensesURL, gencountURL, settlementURL} from '../REST-Urls';
import {Observable} from 'rxjs';
import {Debt, Expense} from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  http = inject(HttpClient);
  getExpensesByGencountId(gencountId: number){
    return this.http.get<Expense[]>(gencountURL + `/${gencountId}/expenses`);
  }
  createExpense(expense : Expense){
    return this.http.post<Expense>(expensesURL, expense);
  }
  putUsers(users: number[], expenseId: number) {
    return this.http.post(settlementURL + `/create-settlements`, {
      expenseId: expenseId,
      usersids  : users
    })
  }

  getDebtsByGencountId(gencountId: number) {
    return this.http.get<Debt[]>(gencountURL + `/${gencountId}/debts`);
  }
}
