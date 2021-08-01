import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { ApplicationModule } from './application.module';

const routes: Routes = [
    { path: '', component: ApplicationComponent}
]   
@NgModule({
  imports: [ApplicationModule,RouterModule.forChild(routes)],
})
export class ApplicationRoutingModule { }
