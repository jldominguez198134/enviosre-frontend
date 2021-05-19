import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayTaxRoutingModule } from './day-tax-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DayTaxRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: 'isBrowser', useValue: true }
  ]
})
export class DayTaxModule { }
