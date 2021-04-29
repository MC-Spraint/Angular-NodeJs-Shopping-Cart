import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
  	      private _injector: Injector) { }//different injecting method**

  intercept(req:any,next:any){
	let authService= this._injector.get(AuthService);

	 let tokenizedReq = req.clone({
		  setHeaders: {
		  Authorization: `${authService.getToken()}`,
		  }
		  //responseType: 'text'
	  })
	  return next.handle(tokenizedReq);
  }
}
