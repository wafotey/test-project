import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrdersModule } from './orders.module';

const routes: Routes = [
    { path: '', component: OrdersComponent}
]
@NgModule({
  imports: [OrdersModule,RouterModule.forChild(routes)],
})
export class OrdersRoutingModule { }
