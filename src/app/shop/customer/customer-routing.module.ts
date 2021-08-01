import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerModule } from './customer.module';

const routes: Routes = [
    { path: '', component: CustomerComponent}
]
@NgModule({
  imports: [CustomerModule,RouterModule.forChild(routes)],
})
export class CustomerRoutingModule { }
