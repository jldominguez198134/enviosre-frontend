import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DayTaxComponent } from './pages/day-tax/day-tax.component';
import { HelpComponent } from './pages/help/help.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { AccountPipe } from './pipes/account.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuienesSomosComponent,
    NotFoundPageComponent,
    DayTaxComponent,
    HelpComponent,
    SignupComponent,
    ProfileComponent,
    TransferComponent,
    AccountPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
