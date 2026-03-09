import {Component, inject, input, signal} from '@angular/core';
import {ExpensesList} from '../../pages/expenses-list/expenses-list';
import {Router} from '@angular/router';
import {Gencount} from '../../../interfaces';
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

  openExpenseCreation(){
    this.router.navigate(['/expense-create'], {state: {gencountId: this.gencount().gencountId}})
  }

  setActiveTab(index: number) {
    this.activeTabIndex.set(index);
  }

  protected readonly Plus = Plus;
}
