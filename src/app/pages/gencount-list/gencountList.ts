import {Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {LucideAngularModule, CircleUserRound, UserRoundPlus, Plus, Trash2} from 'lucide-angular';
import {Gencount} from '../../../interfaces';
import {GencountService} from '../../services/gencount.service';
import {ThemeService} from '../../services/theme.service';

type GencountCard = {
  id: number;
  name: string;
  totalSpent: number;
};

@Component({
  selector: 'app-gencount-list',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: 'gencountList.html',
  styleUrls: ['gencountList.css'],
})
export class GencountListComponent {
  gencounts = signal<Gencount[]>([]);
  theme = inject(ThemeService)
  themeService = inject(ThemeService);

  constructor(
    private router: Router,
    private gencountService: GencountService,
  ) {
    this.gencountService.showGencounts().subscribe({
      next: (data) => {
        this.gencounts.set(data);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  /*open(id: number) {
    console.log('open gencount', id);
    // TODO: this.router.navigate(['/gencount', id]);
  }*/
  open(id: number) {
    this.router.navigate(['/gencount', id], {
      state: {
        gencountId: this.gencounts().map(g => g.gencountId).find(gId => gId == id)
      },
    });
  }

  /*goCreate() {
    console.log('go create gencount');
    // TODO: this.router.navigate(['/gencount/new']);
  }*/
  goCreate() {
    this.router.navigate(['/gencount/new']);
  }

  protected addFriend() {
    console.log('add friend');
    //TODO: this.router.navigate(['/gencount-add-friend']);
  }

  protected goProfile() {
    console.log('go profile');
    // TODO: this.router.navigate(['/gencount-goProfile']);
  }

  deleteInProgress = new Set<number>();
  deleteGencount(event: Event, id: number) {
    event.stopPropagation();
    if (!this.deleteInProgress.has(id)) {
      this.deleteInProgress.add(id);
      this.gencountService.deleteById(id).subscribe({
        next: () => {
          this.gencounts.update(gencounts => gencounts.filter(g => g.gencountId != id));
          this.deleteInProgress.delete(id);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  protected readonly UserRoundPlus = UserRoundPlus;
  protected readonly CircleUserRound = CircleUserRound;
  protected readonly Plus = Plus;
  protected readonly Trash2 = Trash2;
  protected readonly console = console;
}
