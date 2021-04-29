import { Component, OnInit } from '@angular/core';
import { TransportService } from '../transport.service';//new
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	success: boolean = false;
	failure: boolean = false;
  registerUserData:any = {};
  constructor(private _transport:TransportService,
	     private _router:Router) { }//new

  ngOnInit(): void {
  }

  async registerUser(){
	  //console.log(this.registerUserData);
	 await this._transport.registerUser(this.registerUserData)
	  .subscribe(
		  (res) =>{
			console.log(res);
			this.success=true;
			//localStorage.setItem('token',res.signed_token);
		//	this._router.navigate(['/special']);
		  },
		  (err) =>{
			this.failure=true;
			console.log(err);
		  }
	  
	)

  }

}
