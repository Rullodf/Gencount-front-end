import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {gencountURL} from '../REST-Urls';
import {Observable} from 'rxjs';
import {Expense} from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  http = inject(HttpClient);
  getExpensesByGencountId(gencountId: number){
    return this.http.get<Expense[]>(gencountURL + `/${gencountId}/expenses`);
  }
  createExpense(expense : Expense){
    return this.http.post<Expense>(gencountURL + `/${expense.gencountId}/expenses`, expense);
  }
}
