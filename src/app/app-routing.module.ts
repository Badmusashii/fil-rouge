import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageMonCompteComponent } from './components/page-mon-compte/page-mon-compte.component';
import { PageGererGroupeComponent } from './components/page-gerer-groupe/page-gerer-groupe.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'gerer', component: PageGererGroupeComponent },
  { path: 'moncompte', component: PageMonCompteComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
