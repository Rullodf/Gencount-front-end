import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {LoginCredentials, User} from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  authURL = 'http://localhost:8080/api/auth';
  baseURL = 'http://localhost:8080/api/users';
  register(user: User): Observable<User> {
    return this.http.post<User>(this.authURL + '/register', user);
  }

  login(credentials: LoginCredentials) {
    return this.http.post<{ token: string; user: User }>(this.authURL + '/login', credentials).pipe(
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
    return this.http.get<User[]>(`${this.baseURL}/${u1.userId}/friends`);
  }
}
