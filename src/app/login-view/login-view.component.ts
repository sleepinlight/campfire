import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { AuthenticationService } from '../shared/auth/authentication.service';
import { Credentials } from '../shared/models/credentials.model';
import { from } from 'rxjs';

@Component({
	selector: 'app-login-view',
	templateUrl: './login-view.component.html',
	styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent implements OnInit {
	credentials: Credentials = {
		emailAddress: '',
		password: '',
	};
	constructor(public authService: AuthenticationService) {}

	ngOnInit() {}

	createAccount(credentials: Credentials) {
		from(this.authService.createAccount(credentials)).subscribe((res) => {
			console.log(res);
		});
	}

	emailSignIn(credentials) {
		from(this.authService.login(credentials)).subscribe((res) => {
			console.log(res);
		});
	}

	fieldsAreValid(credentials) {
		return credentials.emailAddress.length && credentials.password.length;
	}

	login() {
		// this.authService.loginWithGoogle(new auth.GoogleAuthProvider());
	}
	logout() {
		this.authService.logout();
	}
}
