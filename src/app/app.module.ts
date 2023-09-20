import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderhomeComponent } from './components/headerhome/headerhome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadermemberComponent } from './components/headermember/headermember.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';
import { PageMonCompteComponent } from './components/page-mon-compte/page-mon-compte.component';
import { MemberupdateComponent } from './components/memberupdate/memberupdate.component';
import { MemberdeleteComponent } from './components/memberdelete/memberdelete.component';
import { PageGererGroupeComponent } from './components/page-gerer-groupe/page-gerer-groupe.component';
import { GroupecreateComponent } from './components/groupecreate/groupecreate.component';
import { GroupecardComponent } from './components/groupecard/groupecard.component';
import { PageIntermediareComponent } from './components/page-intermediare/page-intermediare.component';
import { PageIntermediareRegisterComponent } from './components/page-intermediare-register/page-intermediare-register.component';
import { PageMesRestosComponent } from './components/page-mes-restos/page-mes-restos.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { GroupeListComponent } from './components/groupe-list/groupe-list.component';
import { CardRestoComponent } from './components/card-resto/card-resto.component';
import { ModalComponent } from './components/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    HeaderhomeComponent,
    NavbarComponent,
    HeadermemberComponent,
    PageHomeComponent,
    CategorieListComponent,
    PageMonCompteComponent,
    MemberupdateComponent,
    MemberdeleteComponent,
    PageGererGroupeComponent,
    GroupecreateComponent,
    GroupecardComponent,
    PageIntermediareComponent,
    PageIntermediareRegisterComponent,
    PageMesRestosComponent,
    RestaurantListComponent,
    GroupeListComponent,
    CardRestoComponent,
    ModalComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
