import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LucideAngularModule, Undo2} from 'lucide-angular';
@Component({
  selector: 'app-gencount-detail',
  imports: [LucideAngularModule],
  templateUrl: './gencount-detail.html',
  styleUrl: './gencount-detail.css',
})
export class GencountDetailComponent {
  constructor(private router: Router) {}

  back() {
    this.router.navigate(['/gencounts']);
  }

  protected readonly Undo2 = Undo2;
}
