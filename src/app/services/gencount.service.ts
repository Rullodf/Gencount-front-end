import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Gencount, User} from '../../interfaces';
import {gencountURL} from '../REST-Urls';

@Injectable({
  providedIn: 'root',
})
export class GencountService {
  constructor(private http: HttpClient) {}



  // /{id}/add-user
  addUsers(users: number[], gencountId: number) {
    return this.http.post(gencountURL + '/' + gencountId + '/add-user', users);
  }

  removeUsers(users: number[], gencountId: number) {
    return this.http.post(gencountURL + '/' + gencountId + '/remove-user', users);
  }

  tempUser = JSON.parse(localStorage.getItem('user')!) as User;

  createGencount(pGencount: Partial<Gencount>) {
    return this.http.post<Gencount>(gencountURL, {
      ownerId: this.tempUser.userId,
      gencountId: 0,
      name: pGencount.name,
      description: pGencount.description,
      category: 'test',
      currency: 'test',
    });
  }

  showGencounts() {
    return this.http.get<Gencount[]>(gencountURL + `?userId=${this.tempUser.userId}`);
  }

  getGencountById(id: number) {
    return this.http.get<Gencount>(gencountURL + `/${id}`);
  }

  getUsers(gencountId: number) {
    return this.http.get<User[]>(gencountURL + `/${gencountId}/users`);
  }

  deleteById(id: number) {
    return this.http.delete(gencountURL + `/${id}`);
  }
}


