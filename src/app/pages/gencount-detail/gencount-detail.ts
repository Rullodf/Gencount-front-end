import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gencount-detail',
  imports: [],
  templateUrl: './gencount-detail.html',
  styleUrl: './gencount-detail.css',
})
export class GencountDetailComponent {
  constructor(private router: Router) {}

  back() {
    this.router.navigate(['/gencounts']);
  }
}
