import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuienesSomosRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: 'isBrowser', useValue: true }
  ]
})
export class QuienesSomosModule { }
