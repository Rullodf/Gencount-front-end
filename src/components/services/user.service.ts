import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }
  baseUrl = 'http://localhost:8080/api/users';

  register(user: User): Observable<User>{
    return this.http.post<User>(this.baseUrl, user, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
    })
  }

  login(credentials: LoginCredentials) {
    return this.http.post<{token: string}>(this.baseUrl + '/login', credentials)
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.token)
          }
        )
      )
  }

  getToken() {
    return localStorage.getItem('token')
  }
}

export interface User {
  id: number
  name: string;
  surname: string;
  gender: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth: string
}

export interface LoginCredentials {email: string, password: string}
