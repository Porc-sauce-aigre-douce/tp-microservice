import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddFilmPageComponent } from './add-film-page/add-film-page.component';
import { AddScreeningPageComponent } from './add-screening-page/add-screening-page.component';
import { EditScreeningPageComponent } from './edit-screening-page/edit-screening-page.component';
import { EditFilmPageComponent } from './edit-film-page/edit-film-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'addFilm', component: AddFilmPageComponent },
  { path: 'addScreening', component: AddScreeningPageComponent },
  { path: 'editScreening/:id', component: EditScreeningPageComponent},
  { path: 'editFilm/:id', component: EditFilmPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
