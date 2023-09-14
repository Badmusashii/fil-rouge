import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageAuthComponent } from './components/page-auth/page-auth.component';
import { HeaderhomeComponent } from './components/headerhome/headerhome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadermemberComponent } from './components/headermember/headermember.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    PageAccueilComponent,
    PageNotFoundComponent,
    PageAuthComponent,
    HeaderhomeComponent,
    NavbarComponent,
    HeadermemberComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
