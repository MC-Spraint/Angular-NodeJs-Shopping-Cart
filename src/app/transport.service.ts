import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//new

@Injectable({
  providedIn: 'root'
})
export class TransportService {

        private _registerUrl:string = "http://localhost:3000/api/register";

  constructor(private http: HttpClient) { }


registerUser(user:any){
        return this.http.post<any>(this._registerUrl , {email:user.email});

}
}
