import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//new

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private _loginUrl:string = "http://localhost:3000/api/login";

	private _registerUrl:string = "http://localhost:3000/api/register";
	
	private _verifyUrl:string = "http://localhost:3000/api/verify";

  constructor(private http: HttpClient) { }

registerUser(user:any){
        return this.http.post<any>(this._registerUrl , user);
}

verifyUser(user:any){
	return this.http.post<any>(this._verifyUrl , user)
}

loginUser(user:any){
	return this.http.post<any>(this._loginUrl , user);

}
loggedIn(){
	return !!localStorage.getItem('token');
}
getToken(){
	return localStorage.getItem('token');//new6
}
logoutUser(){
	return localStorage.removeItem('token');//last
}

}
