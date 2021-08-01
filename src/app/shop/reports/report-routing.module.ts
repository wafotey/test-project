import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { ReportsModule } from './reports.module';

const routes: Routes = [
    { path: '', component: ReportsComponent}
]
@NgModule({
  imports: [ReportsModule,RouterModule.forChild(routes)],
})
export class ReportsRoutingModule { }
