import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {LucideAngularModule} from 'lucide-angular';
import {GencountService} from '../../../components/services/gencount.service';
import {UserList} from '../../../components/forms/findUser';

@Component({
  selector: 'app-gencount-create',
  imports: [ReactiveFormsModule, LucideAngularModule, UserList],
  templateUrl: './gencount-create.html',
  styleUrls: ['./gencount-create.css'],
})
export class GencountCreateComponent {
  form: any;
  showAddPeople = false;

  constructor(private fb: FormBuilder, private gencountService: GencountService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  submit() {
    console.log(this.form.value);
    this.gencountService.createGencount(this.form.value).subscribe({})
  }

  toggleAddPeople() {
    this.showAddPeople = !this.showAddPeople;
  }
}
