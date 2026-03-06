import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {LucideAngularModule} from 'lucide-angular';
import {GencountService} from '../../../components/services/gencount.service';
import {UserList} from '../../../components/forms/findUser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gencount-create',
  imports: [ReactiveFormsModule, LucideAngularModule, UserList],
  templateUrl: './gencount-create.html',
  styleUrls: ['./gencount-create.css'],
})
export class GencountCreateComponent {
  form: any;
  showAddPeople = false;
  r = inject(Router);
  addingList: number[] = [];

  constructor(private fb: FormBuilder, private gencountService: GencountService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  submit() {
    console.log(this.form.value);
    this.gencountService.createGencount(this.form.value).subscribe({next:(_) =>
      {this.r.navigate(["/gencounts"])}})
  }

  toggleAddPeople() {
    this.showAddPeople = !this.showAddPeople;
  }

  addToAddingList(event: HTMLInputElement) {
    if (event.checked) {
      this.addingList.push(parseInt(event.value))
    }
    else{
      this.addingList = this.addingList.filter(e => e != parseInt(event.value))
    }
    console.log(this.addingList);
  }
}
