import {Component, inject, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {LucideAngularModule} from 'lucide-angular';
import {GencountService} from '../../services/gencount.service';
import {UserList} from '../../components/forms/user-list/user-list';
import {Router} from '@angular/router';
import {User} from '../../../interfaces';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-gencount-create',
  imports: [ReactiveFormsModule, LucideAngularModule, UserList],
  templateUrl: './gencount-create.html',
  styleUrls: ['./gencount-create.css'],
})
export class GencountCreateComponent {
  friends = signal<User[]>([]);
  form: any;
  showAddPeople = false;
  r = inject(Router);
  addingList: number[] = [];
  isFormAlreadySubmitted = false;

  constructor(private fb: FormBuilder, private gencountService: GencountService, private userService: UserService,) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
    this.userService.getFriends().subscribe({
      next: (data) => {
        this.friends.set(data.sort((a, b) => a.surname.toLowerCase().localeCompare(b.surname.toLowerCase()))
          .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())));
        setTimeout(() => {
          console.log(this.friends);
        }, 8000);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submit() {
    if (!this.isFormAlreadySubmitted) {
      this.isFormAlreadySubmitted = true;
      console.log(this.form.value);
      this.gencountService.createGencount(this.form.value).subscribe({
        next: (createdGencount) => {
          this.gencountService.addUsers(this.addingList, createdGencount.gencountId).subscribe({
            next: () => {
              this.r.navigate(['/gencounts'])
            },
          })
        }
      })
    }
  }

  toggleAddPeople() {
    this.showAddPeople = !this.showAddPeople;
  }

  addToAddingList(event: HTMLInputElement) {
    if (event.checked) {
      this.addingList.push(parseInt(event.value))
    } else {
      this.addingList = this.addingList.filter(e => e != parseInt(event.value))
    }
    console.log(this.addingList);
  }
}
