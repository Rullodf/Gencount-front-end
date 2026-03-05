import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {UserService} from '../components/services/user.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userSevice = inject(UserService);
  const token = userSevice.getToken();
  if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(clonedReq)
    return next(clonedReq);
  }
  return next(req);
}
