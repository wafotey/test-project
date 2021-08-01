import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,MatIconModule,RouterModule
  ],
  declarations: [ApplicationComponent]
})
export class ApplicationModule { }
