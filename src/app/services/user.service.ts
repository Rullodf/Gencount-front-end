import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {LoginCredentials, User} from '../../interfaces';
import {authURL, userURL} from '../REST-Urls';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(authURL + '/register', user);
  }

  login(credentials: LoginCredentials) {
    return this.http.post<{ token: string; user: User }>(authURL + '/login', credentials).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        console.log(res);
      }),
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getFriends(): Observable<User[]> {
    const stored = localStorage.getItem('user');
    if (!stored) throw new Error('Nessun user in localStorage');

    const u1 = JSON.parse(stored) as User;

    // usa il campo giusto: molto spesso è u1.id
    return this.http.get<User[]>(userURL + `/${u1.userId}/friends`);
  }
}
