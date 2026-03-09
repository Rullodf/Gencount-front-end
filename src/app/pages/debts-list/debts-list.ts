import {Component, inject, input, signal} from '@angular/core';
import {ExpensesService} from '../../services/expenses.service';
import {Debt, User} from '../../../interfaces';
import {DebtCard} from '../../components/cards/debt-card/debt-card';

@Component({
  selector: 'app-debts-list',
  imports: [DebtCard],
  templateUrl: './debts-list.html',
  styleUrl: './debts-list.css',
})
export class DebtsList {
  debts = signal<Debt[]>([]);
  users = input.required<User[]>();
  gencountId = input.required<number>();
  expensesService = inject(ExpensesService);

  ngOnInit() {
    console.log("ngOnInit")
    this.expensesService.getDebtsByGencountId(this.gencountId()).subscribe(
      (debts) => this.debts.set(debts)
    )
  }
}
