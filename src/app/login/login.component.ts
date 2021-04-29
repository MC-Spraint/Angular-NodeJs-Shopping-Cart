import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	failure:boolean = false;
loginUserData:any = {};
  constructor(private _auth:AuthService,
	     private _router:Router) { }

  ngOnInit(): void {
  }



loginUser(){
	//console.log(this.loginUserData);
	this._auth.loginUser(this.loginUserData)
	.subscribe(
		(res) =>{
		//	console.log(res);
	this._router.navigate(['/special']);
	localStorage.setItem('token',res.signed_token);
//localStorage.setItem('token',res.token);//saving token in l.Strg
		},
		(err) =>{
			this.failure=true;
		}
	)

}

}
