import {Component, inject, input, signal} from '@angular/core';
import { Router } from '@angular/router';
import {LucideAngularModule, Undo2} from 'lucide-angular';
import {Gencount, User} from '../../../interfaces';
import {GencountService} from '../../../components/services/gencount.service';
@Component({
  selector: 'app-gencount-detail',
  imports: [LucideAngularModule],
  templateUrl: './gencount-detail.html',
  styleUrl: './gencount-detail.css',
})
export class GencountDetailComponent {
  gencountService = inject(GencountService);
  gencount = signal<Gencount|null>(null);
  users=signal<User[]|null>(null)
  // gencount = input.required<Gencount>();
  constructor(private router: Router) {
    let gencountId = router.currentNavigation()?.extras.state?.['gencountId'] as number;
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
}
