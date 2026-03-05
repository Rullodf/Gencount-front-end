import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-gencount-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './gencount-create.html',
  styleUrls: ['./gencount-create.css'],
})
export class GencountCreateComponent {
  form: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  submit() {
    console.log(this.form.value);
  }
  showAddPeople = false;

  toggleAddPeople() {
    this.showAddPeople = !this.showAddPeople;
  }
}
