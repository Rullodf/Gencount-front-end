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
  addUsers(users: User[], gencountId: number) {
    return this.http.post(this.countBaseURL + '/' + gencountId + '/add-user',users);
  }
  removeUsers(users: User[], gencountId: number) {
    return this.http.post(this.countBaseURL + '/' + gencountId + '/remove-user',users);
  }
}
