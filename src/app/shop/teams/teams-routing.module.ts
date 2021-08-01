import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamsModule } from './teams.module';

const routes: Routes = [
    { path: '', component: TeamsComponent}
]
@NgModule({
  imports: [TeamsModule,RouterModule.forChild(routes)],
})
export class TeamsRoutingModule { }
