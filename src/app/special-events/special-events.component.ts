import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpErrorResponse } from '@angular/common/http';//new7
import { Router } from '@angular/router';//new7

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents:any = [];
  constructor(private _eventsService: EventsService,
	      private _router: Router) { }

  ngOnInit(): void  {
	this._eventsService.getSpecialEvents()
	  .subscribe(
		  res =>  this.specialEvents=res,
		  err =>  {
			 //console.log(err);
			if(err instanceof HttpErrorResponse){
				  if(err.status===401){
					  this._router.navigate(['/login'])//new7
				  }
			  }
		  }
		  
	  )
} 

}
