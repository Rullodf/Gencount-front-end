import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { User } from './user.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GencountService {
  constructor(private http: HttpClient) {}
  countBaseURL = 'http://localhost:8080/api/gencounts'; // /{id}/remove-user
  // /{id}/add-user
  addUser(users: User[]) {
    return this.http.post(this.countBaseURL + '/' + user.userId + '/add-user',users);
  }
  removeUser(users: User[]) {
    return this.http.post(this.countBaseURL + '/' + user.userId + '/remove-user',users);
  }
}
