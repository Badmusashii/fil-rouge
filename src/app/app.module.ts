import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { PageAuthComponent } from './components/page-auth/page-auth.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderhomeComponent } from './components/headerhome/headerhome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadermemberComponent } from './components/headermember/headermember.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupecardComponent } from './components/groupecard/groupecard.component';
import { FormsModule } from '@angular/forms';
import { MemberupdateComponent } from './components/memberupdate/memberupdate.component';
import { MemberdeleteComponent } from './components/memberdelete/memberdelete.component';
import { GroupecreateComponent } from './components/groupecreate/groupecreate.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    GroupecardComponent,
    MemberupdateComponent,
    MemberdeleteComponent,
    GroupecreateComponent,
    PageAccueilComponent,
    PageNotFoundComponent,
    PageAuthComponent,
    HeaderhomeComponent,
    NavbarComponent,
    HeadermemberComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
