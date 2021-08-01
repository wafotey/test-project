import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

const routes: Routes = [
    { path: '', component: HomeComponent}
]
@NgModule({
  imports: [HomeModule,RouterModule.forChild(routes)],
})
export class HomeRoutingModule { }
