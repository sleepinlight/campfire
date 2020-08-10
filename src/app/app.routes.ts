import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'login',
		component: LoginViewComponent,
	},
	{
		path: 'sign-up',
		component: SignUpComponent,
	},
];
