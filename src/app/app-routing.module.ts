import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageAuthComponent } from './components/page-auth/page-auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageMesRestosComponent } from './components/page-mes-restos/page-mes-restos.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: PageAccueilComponent },
  { path: 'mes-restos', component: PageMesRestosComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
