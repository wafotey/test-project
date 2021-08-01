import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const components = [NavbarComponent,SidebarComponent]

@NgModule({
  imports: [
    CommonModule,MatIconModule,RouterModule,TranslateModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class SharedModule { }
