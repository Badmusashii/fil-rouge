import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageAuthComponent } from './components/page-auth/page-auth.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'auth', component: PageAuthComponent },
  { path: 'home', component: PageAccueilComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
