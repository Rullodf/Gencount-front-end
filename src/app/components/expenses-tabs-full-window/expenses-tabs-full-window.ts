import {Component, inject, input, signal} from '@angular/core';
import {ExpensesList} from '../../pages/expenses-list/expenses-list';
import {Router} from '@angular/router';
import {Gencount, User} from '../../../interfaces';
import {LucideAngularModule, Plus} from 'lucide-angular';

@Component({
  selector: 'expenses-tabs-full-window',
  templateUrl: './expenses-tabs-full-window.html',
  styleUrls: ['./expenses-tabs-full-window.css'],
  imports: [
    ExpensesList,
    LucideAngularModule
  ],
})
export class ExpensesTabsFullWindow {
  router = inject(Router);
  gencount = input.required<Gencount>();
  activeTabIndex = signal(0);
  partecipants = input.required<User[]>()

  openExpenseCreation() {
    this.router.navigate(['/expense-create'], {
      state: {
        gencountId: this.gencount().gencountId,
        partecipants: this.partecipants()
      }
    })
  }

  setActiveTab(index: number) {
    this.activeTabIndex.set(index);
  }

  protected readonly Plus = Plus;
}
