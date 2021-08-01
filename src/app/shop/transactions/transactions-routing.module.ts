import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions.component';
import { TransactionsModule } from './transactions.module';

const routes: Routes = [
    { path: '', component: TransactionsComponent}
]
@NgModule({
  imports: [TransactionsModule,RouterModule.forChild(routes)],
})
export class TransactionsRoutingModule { }
