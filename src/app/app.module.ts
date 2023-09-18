import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';

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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
