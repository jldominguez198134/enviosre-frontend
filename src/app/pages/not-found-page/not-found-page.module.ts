import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotFoundPageRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: 'isBrowser', useValue: true }
  ]
})
export class NotFoundPageModule { }
