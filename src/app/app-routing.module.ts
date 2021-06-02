import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component'; 

import { AuthGuard } from './auth.guard';
const routes: Routes = [
	{
		path: '',
		redirectTo: '/events',
		pathMatch: 'full'
	},
	{
		path: 'events',
		component: EventsComponent
	},
	{
		path: 'special',
		component: SpecialEventsComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'welcome',
		component: WelcomeComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
