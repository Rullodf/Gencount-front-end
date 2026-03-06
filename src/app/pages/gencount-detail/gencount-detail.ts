import {Component, input} from '@angular/core';
import { Router } from '@angular/router';
import {LucideAngularModule, Undo2} from 'lucide-angular';
import {Gencount} from '../../../interfaces';
@Component({
  selector: 'app-gencount-detail',
  imports: [LucideAngularModule],
  templateUrl: './gencount-detail.html',
  styleUrl: './gencount-detail.css',
})
export class GencountDetailComponent {
  name:string = '';
  description:string = '';
  gencount:Gencount ;
  // gencount = input.required<Gencount>();
  constructor(private router: Router) {
    // this.name = this.gencount().name;
    // this.description = this.gencount().description;
    this.gencount = router.currentNavigation()?.extras.state as Gencount;
    console.log(this.gencount);
  }

  back() {
    this.router.navigate(['/gencounts']);
  }

  protected readonly Undo2 = Undo2;
}
