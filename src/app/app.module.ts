import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';

import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderhomeComponent } from './components/headerhome/headerhome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadermemberComponent } from './components/headermember/headermember.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { GroupeListComponent } from './components/groupe-list/groupe-list.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';
import { PageGererMesRestosComponent } from './components/page-gerer-mes-restos/page-gerer-mes-restos.component';
import { FourchetteDePrixComponent } from './components/fourchette-de-prix/fourchette-de-prix.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { PageMesRestosComponent } from './components/page-mes-restos/page-mes-restos.component';
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
    PageMesRestosComponent,
    CardRestoComponent,
    ModalComponent,,
    PageHomeComponent,
    CategorieListComponent,
    GroupeListComponent,
    PageGererMesRestosComponent,
    FourchetteDePrixComponent,
    RestaurantListComponent
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
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    }
  ModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
