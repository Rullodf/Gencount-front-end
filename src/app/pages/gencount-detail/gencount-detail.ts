import {Component, inject, input, signal} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LucideAngularModule, Undo2} from 'lucide-angular';
import {Gencount, User} from '../../../interfaces';
import {GencountService} from '../../services/gencount.service';
import {ExpensesList} from '../expenses-list/expenses-list';
import {ExpensesTabsFullWindow} from '../../components/expenses-tabs-full-window/expenses-tabs-full-window';
import {ThemeService} from '../../services/theme.service';
@Component({
  selector: 'app-gencount-detail',
  imports: [LucideAngularModule, ExpensesTabsFullWindow],
  templateUrl: './gencount-detail.html',
  styleUrl: './gencount-detail.css',
})
export class GencountDetailComponent {
  gencountService = inject(GencountService);
  gencount = signal<Gencount|null>(null);
  users=signal<User[]|null>(null)
  activatedRoute = inject(ActivatedRoute)
  themeService = inject(ThemeService);
  // gencount = input.required<Gencount>();
  constructor(private router: Router) {
    let gencountId = this.activatedRoute.snapshot.params['id'] as number;
    this.gencountService.getGencountById(gencountId).subscribe({
      next: (gencount) => {
        this.gencount.set(gencount);
        this.gencountService.getUsers(gencountId).subscribe({
          next: (users) => {
            this.users.set(users)
          }
        })
        //TODO: raccolta lista spese
      }
    })
    console.log(gencountId);
  }

  back() {
    this.router.navigate(['/gencounts']);
  }


  protected readonly Undo2 = Undo2;
  protected readonly parseInt = parseInt;
}
