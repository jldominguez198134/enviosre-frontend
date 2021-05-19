import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: 'isBrowser', useValue: true }
  ]
})
export class ProfileModule { }
