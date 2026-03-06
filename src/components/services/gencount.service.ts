import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Gencount, User} from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GencountService {
  constructor(private http: HttpClient) {}

  countBaseURL = 'http://localhost:8080/api/gencounts'; // /{id}/remove-user
  findAllURL = 'http://localhost:8080/api/gencounts?userId=';

  // /{id}/add-user
  addUsers(users: number[], gencountId: number) {
    return this.http.post(this.countBaseURL + '/' + gencountId + '/add-user', users);
  }

  removeUsers(users: number[], gencountId: number) {
    return this.http.post(this.countBaseURL + '/' + gencountId + '/remove-user', users);
  }

  tempUser = JSON.parse(localStorage.getItem('user')!) as User;

  createGencount(pGencount: Partial<Gencount>) {
    return this.http.post<Gencount>(this.countBaseURL, {
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

  getGencountById(id: number) {
    return this.http.get<Gencount>(`${this.countBaseURL}/${id}`);
  }

  getUsers(gencountId: number) {
    return this.http.get<User[]>(`${this.countBaseURL}/${gencountId}/users`);
  }
}


