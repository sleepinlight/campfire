import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { ThemeEngineService } from './shared/theme-engine/theme-engine.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '@src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from './shared/auth/authentication.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent, HomeComponent, LoginViewComponent, SignUpComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
	providers: [ThemeEngineService, AuthenticationService],
	bootstrap: [AppComponent],
})
export class AppModule {}
