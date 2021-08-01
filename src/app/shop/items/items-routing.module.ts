import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';
import { ItemsModule } from './items.module';

const routes: Routes = [
    { path: '', component: ItemsComponent}
]
@NgModule({
  imports: [ItemsModule,RouterModule.forChild(routes)],
})
export class ItemsRoutingModule { }
