import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LinkedInLoginResponseComponent } from './linked-in-login-response/linked-in-login-response.component';
import { LinkedinServiceService } from './linkedin-service.service';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "linkedInLogin", component: LinkedInLoginResponseComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LinkedInLoginResponseComponent
  ],
  imports: [
    HttpClientModule,BrowserModule, RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
