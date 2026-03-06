import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from './user.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GencountService {
  constructor(private http: HttpClient) {}

  countBaseURL = 'http://localhost:8080/api/gencounts'; // /{id}/remove-user
  findAllURL = 'http://localhost:8080/api/gencounts?userId=';

  // /{id}/add-user
  addUsers(users: User[], gencountId: number) {
    return this.http.post(this.countBaseURL + '/' + gencountId + '/add-user', users);
  }

  removeUsers(users: User[], gencountId: number) {
    return this.http.post(this.countBaseURL + '/' + gencountId + '/remove-user', users);
  }

  tempUser = JSON.parse(localStorage.getItem('user')!) as User;

  createGencount(pGencount: Partial<Gencount>) {
    return this.http.post<Partial<Gencount>>(this.countBaseURL, {
      ownerId: this.tempUser.userId,
      gencountId: 0,
      name: pGencount.name,
      description: pGencount.description,
      category: 'test',
      currency: 'test',
    });
  }

  showGencounts() {
    return this.http.get<Gencount[]>(`${this.findAllURL}${this.tempUser.userId}`);
  }
}

export interface Gencount {
  name: string;
  description: string;
  gencountId: number;
  category: string;
  currency: string;
  ownerId: number;
}
