import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
  NavbarComponent,
  FooterComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  bootstrap: []
})
export class SharedModule { }
