import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //new
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; //new
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service'; //new3
import { EventsService } from './events.service'; //new4
import { AuthGuard } from './auth.guard';//new 5
import { TokenInterceptorService } from './token-interceptor.service';//new6

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //new
    HttpClientModule,//new
    AppRoutingModule,
    NgbModule
  ],
  providers: [AuthService,EventsService,AuthGuard
	   ,{
  		provide:HTTP_INTERCEPTORS,
  		useClass:TokenInterceptorService,
  		multi: true
  	  }],//new3 new6
  bootstrap: [AppComponent]
})
export class AppModule { }
