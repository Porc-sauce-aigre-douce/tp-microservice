import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddFilmPageComponent } from './add-film-page/add-film-page.component';
import { AddScreeningPageComponent } from './add-screening-page/add-screening-page.component';
import { EditScreeningPageComponent } from './edit-screening-page/edit-screening-page.component';
import { EditFilmPageComponent } from './edit-film-page/edit-film-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupPageComponent } from './signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    AddFilmPageComponent,
    AddScreeningPageComponent,
    EditScreeningPageComponent,
    EditFilmPageComponent,
    AdminPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
