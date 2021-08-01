import { ApplicationModule, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiExplorerComponent } from './api-explorer.component';
import { ApiExplorerModule } from './api-explorer.module';

const routes: Routes = [
    { path: '', component: ApiExplorerComponent}
]
@NgModule({
  imports: [ApiExplorerModule,RouterModule.forChild(routes)],
})
export class ApiExplorerRoutingModule { }
